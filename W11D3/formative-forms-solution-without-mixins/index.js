const express = require("express");
const cookieParser = require("cookie-parser");
const { check, validationResult } = require("express-validator");
const csrf = require("csurf");

const app = express();
const port = process.env.PORT || 3000;

const csrfProtection = csrf({ cookie: true }); // middleware function

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.get("/", (req, res) => {
  res.render("index", { title: "Formative Forms", users });
});

/* GET create form. */
app.get("/create", csrfProtection, (req, res, next) => {
  res.render("create", {
    title: "Create a user",
    messages: [],
    csrfToken: req.csrfToken()
  });
});

const validationMiddleware = (req, res, next) => {
  const { firstName, lastName, email, password, confirmedPassword } = req.body;
  const errors = [];

  if (!firstName) {
    errors.push("Please provide a first name.");
  }

  if (!lastName) {
    errors.push("Please provide a last name.");
  }

  if (!email) {
    errors.push("Please provide an email.");
  }

  if (!password) {
    errors.push("Please provide a password.");
  }

  if (password && password !== confirmedPassword) {
    errors.push(
      "The provided values for the password and password confirmation fields did not match."
    );
  }

  req.errors = errors;
  next();
};

app.post("/create", csrfProtection, validationMiddleware, (req, res) => {
  const { firstName, lastName, email, password, confirmedPassword } = req.body;
  const errors = req.errors;

  if (errors.length > 0) {
    res.render("create", {
      title: "Create a user",
      firstName,
      lastName,
      email,
      csrfToken: req.csrfToken(),
      messages: errors
    });
    return;
  }

  users.push({ id: users.length + 1, firstName, lastName, email });
  res.redirect("/");
});

/* GET create-interesting form. */
app.get("/create-interesting", csrfProtection, (req, res) => {
  res.render("create-interesting", {
    title: `Create an interesting user`,
    messages: [],
    csrfToken: req.csrfToken()
  });
});

app.post(
  "/create-interesting",
  csrfProtection,
  validationMiddleware,
  [
    check("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("must contain a number"),
    check("age")
      .exists({ checkFalsy: true })
      .withMessage("is required"),
    check("age")
      .isInt({ min: 0, max: 120 })
      .withMessage("must be a valid age"),
    check("favoriteBeatle")
      .exists({ checkFalsy: true })
      .withMessage("is required"),
    check("favoriteBeatle")
      .isIn(["John", "Paul", "Ringo", "George"])
      .withMessage("must be a real Beatle member")
  ],
  (req, res) => {
    const validatorErrors = validationResult(req).errors.map(
      ({ msg, param }) => `${param} ${msg}`
    );

    const errors = req.errors.concat(validatorErrors);
    if (errors.length > 0) {
      res.render("create-interesting", {
        title: "Create an interesting user",
        ...req.body,
        csrfToken: req.csrfToken(),
        messages: errors
      });
      return;
    }
    const {
      firstName,
      lastName,
      email,
      favoriteBeatle,
      iceCream,
      age
    } = req.body;

    users.push({
      id: users.length + 1,
      firstName,
      lastName,
      email,
      favoriteBeatle,
      iceCream: iceCream === "on",
      age
    });
    res.redirect("/");
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
