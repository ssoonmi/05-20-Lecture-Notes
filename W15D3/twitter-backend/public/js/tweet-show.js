const getTweet = async (id) => {
  const res = await fetch("/api/tweets/" + id);
  const data = await res.json();
  return data;
};

const createTweet = (tweet) => {
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
      <div class="tweet-container">
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
                <li><button class="delete">Delete</button></li>
              </ul>
            </div>
            <div class="tweet-contents">
              ${tweet.message}
            </div>
      </div>
    `;
};

const populateTweetsThread = async () => {
  const tweetsList = document.querySelector(".tweet-thread");

  const tweetId = window.location.pathname.split("/")[2];

  const { tweet } = await getTweet(tweetId);
  const tweetEle = createTweet(tweet);
  tweetsList.innerHTML += tweetEle;
};

populateTweetsThread();