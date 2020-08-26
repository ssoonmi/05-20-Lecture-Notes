import { disableFormButton } from "./utils/auth.js";

const getTweets = async () => {
  const res = await fetch('/api/tweets');
  const data = await res.json();
  return data;
};

const createTweetLi = (tweet) => {
  const createdAt = new Date(tweet.createdAt);
  const timeOptions = {
    minute: "numeric",
    hour: "numeric",
  };

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const timestamp =
    createdAt.toLocaleString("en-US", timeOptions) +
    " · " +
    createdAt.toLocaleString("en-US", dateOptions);

  return `
      <a href="/tweets/${tweet.id}">
        <li>
          <div class="user-icon">
            <i class="fas fa-user"></i>
          </div>
          <div class="tweet">
            <div class="tweet-header">
              @${tweet.User.username} · ${timestamp}
              <div class="dropdown-arrow">
                <i class="fas fa-chevron-circle-down"></i>
              </div>
              <div class="modal-background" style="display: none"></div>
              <ul class="dropdown-menu" style="display: none">
                <li><button class="delete" data-id=${tweet.id}>Delete</button></li>
              </ul>
            </div>
            <div class="tweet-contents">
              ${tweet.message}
            </div>
          </div>
        </li>
      </a>
    `;
}

const populateTweetsList = async () => {
  const tweetsList = document.querySelector('.tweets-list');

  const { tweets } = await getTweets();
  for (let tweet of tweets) {
    const tweetLi = createTweetLi(tweet);
    
    tweetsList.innerHTML += tweetLi;
  }
  
  const tweetLis = document.querySelectorAll(".tweets-list > a");
  const tweetDropdownArrows = document.querySelectorAll(".tweets-list .dropdown-arrow");
  const tweetModals = document.querySelectorAll(".tweets-list .modal-background");
  const deleteButtons = document.querySelectorAll(".tweets-list .delete");
  const tweetDropdowns = document.querySelectorAll(".tweets-list .dropdown-menu");

  console.log({
    tweetLis,
    tweetDropdownArrows,
    tweetModals,
    deleteButtons,
    tweetDropdowns,
    length: tweetLis.length
  })

  for (let idx = 0; idx < tweetLis.length; idx++) {
    const tweetLi = tweetLis[idx];
    const tweetDropdownArrow = tweetDropdownArrows[idx];
    const tweetModal = tweetModals[idx];
    const deleteButton = deleteButtons[idx];
    const tweetDropdown = tweetDropdowns[idx];

    tweetDropdownArrow.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      tweetModal.style.display = "block";
      tweetDropdown.style.display = "block";

      function closeModal(e) {
        e.preventDefault();
        e.stopPropagation();
        tweetModal.removeEventListener("click", closeModal);
        deleteButton.removeEventListener("click", deleteTweet); 
        tweetModal.style.display = "none";
        tweetDropdown.style.display = "none";
      }

      async function deleteTweet(e) {
        e.preventDefault();
        e.stopPropagation();
        const res = await fetch("/api/tweets/" + deleteButton.dataset.id, {
          method: "DELETE",
        });

        if (res.ok) tweetLi.remove();
      };

      deleteButton.addEventListener("click", deleteTweet); 

      tweetModal.addEventListener("click", closeModal);
    });
  }
}

populateTweetsList();

const tweetForm = document.querySelector('#tweet-form');

tweetForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(tweetForm);
  const message = formData.get('message');
  const _csrf = formData.get('_csrf');

  const body = { message, _csrf };

  const res = await fetch('/api/tweets', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  const { tweet } = data;

  const tweetsList = document.querySelector(".tweets-list");
  const tweetLi = createTweetLi(tweet);

  tweetsList.innerHTML = tweetLi + tweetsList.innerHTML;
});

disableFormButton('#tweet-form textarea', '#tweet-form button');