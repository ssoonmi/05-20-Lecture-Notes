const startLoader = () => {
  document.querySelector(".loader").innerHTML = "Loading...";
};

const stopLoader = () => {
  document.querySelector(".loader").innerHTML = "";
};

const clearError = () => {
  document.querySelector(".error").innerHTML = "";
};

const handleResponse = response => {
  stopLoader();
  clearError();

  // if (!response.ok) {
  if (response.status !== 200) {
    throw response;
  }
  return response.json();
};

const handleError = error => {
  if (error.json) {
    error.json().then(errorJSON => {
      document.querySelector(
        ".error"
      ).innerHTML = `Error occured: ${errorJSON.message}`;
    });
  } else {
    console.error(error);
    alert("Something went wrong. Please try again!");
  }
};

const fetchImage = async () => {
  startLoader();
  try {
    const response = await fetch("/kitten/image")
    const data = await handleResponse(response);
    document.querySelector(".cat-pic").src = data.src;
    document.querySelector(".score").innerHTML = data.score;
    document.querySelector(".comments").innerHTML = "";
  } catch (error) {
    handleError(error);
  }
  // fetch("http://localhost:3000/kitten/image")
  //   .then(handleResponse)
  //   .then(data => {
  //     document.querySelector(".cat-pic").src = data.src;
  //     document.querySelector(".score").innerHTML = data.score;
  //     document.querySelector(".comments").innerHTML = "";
  //   })
  //   .catch(handleError);
};

const updateImageScore = data => {
  const { score } = data;
  document.querySelector(".score").innerHTML = score;
};

// flow

fetchImage();

document.querySelector("#new-pic").addEventListener("click", fetchImage);

document.querySelector("#upvote").addEventListener("click", () => {
  fetch("http://localhost:3000/kitten/upvote", { method: "PATCH" })
    .then(handleResponse)
    .then(updateImageScore)
    .catch(handleError);
});

document.querySelector("#downvote").addEventListener("click", () => {
  fetch("http://localhost:3000/kitten/downvote", { method: "PATCH" })
    .then(response => {
      return response.json();
    })
    .then(updateImageScore);
});

const receiveComments = data => {
  const comments = document.querySelector(".comments");
  comments.innerHTML = "";
  data.comments.forEach((comment, i) => {
    const newCommentContainer = document.createElement("div");
    newCommentContainer.className = "comment-container";

    const newComment = document.createElement("p");
    newComment.appendChild(document.createTextNode(comment));

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("id", i);

    newCommentContainer.appendChild(newComment);
    newCommentContainer.appendChild(deleteButton);
    comments.appendChild(newCommentContainer);
  });
};

const commentForm = document.querySelector(".comment-form");

commentForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(commentForm);
  const comment = formData.get("user-comment");
  fetch("http://localhost:3000/kitten/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ comment })
  })
    .then(handleResponse)
    .then(data => {
      commentForm.reset();
      receiveComments(data);
    })
    .catch(handleError);
});

document.querySelector(".comments").addEventListener("click", event => {
  if (event.target.tagName != "BUTTON") return;

  fetch(`kitten/comments/${event.target.id}`, { method: "DELETE" })
    .then(handleResponse)
    .then(data => receiveComments(data))
    .catch(handleError);
});
