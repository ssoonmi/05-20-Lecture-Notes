// get request
const fetchCategories = () => {
  return fetch("https://jservice.xyz/api/categories");
};

// post request
const createCategory = (title) => {
  return fetch("https://jservice.xyz/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  })
};

const run = async () => {
  // const res = await fetchCategories();
  // console.log("response: ", res);
  // const data = await res.json();
  // console.log("data:", data);

  const res = await createCategory("ACTORS & THEIR FILMS 2");
  console.log("response: ", res);
  const data = await res.json();
  console.log("data:", data);
};

// run();
















const list = document.getElementById('list'); // ul

const makeCategories = async () => {
  const res = await fetchCategories();
  const { categories } = await res.json();
  for (let i = 0; i < 30; i++) {
    const category = categories[i];
    appendCategory(category.title);
  }
};

const appendCategory = (title) => {
  const newCategory = document.createElement("li"); // li
  newCategory.innerHTML = title;
  list.appendChild(newCategory);
};

makeCategories();

const form = document.getElementById("create-category-form");
const input = document.getElementsByTagName("input")[0];

const submitCategory = async (e) => {
  e.preventDefault();
  const title = input.value;
  console.log(title);
  // createCategory(title)
  //   .then(res => {
  //     if (res.status === 200) {
  //       return res.json();
  //     } else {
  //       throw new Error(reset);
  //     }
  //   })
  //   .then(data => appendCategory(data.title))
  //   .catch(data => res.json().then(alert(data)));
  const res = await createCategory(title);
  const data = await res.json();
  console.log(data);
  if (res.status === 200) {
    appendCategory(data.title);
  } else {
    alert(data.message);
  }
};

form.addEventListener('submit', submitCategory);