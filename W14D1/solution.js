/* Problem 1
<footer>Copyright</footer>
*/

const footer = React.createElement('footer', null, 'Copyright');

/* Problem 2
<a href="/posts">All Posts</a>
*/

const allPosts = React.createElement('a', { href: "/posts" }, 'All Posts');

/* Problem 3
<div class="post-header">
  <span>User 1</span>
  <span>2020-05-18</span>
</div>
*/

const postFooter = React.createElement(
  'div',
  { className: 'post-header' },
  React.createElement('span', null, 'User 1'),
  React.createElement('span', null, '2020-05-18')
);

/* Problem 4
<div class="post-footer">
  <button class="edit-button">Edit</button>
  <button class="delete-button">Delete</button>
</div>
*/

const postFooter = React.createElement(
  'div',
  { className: 'post-footer' },
  React.createElement('button', { className: 'edit-button' }, 'Edit'),
  React.createElement('button', { className: 'delete-button' }, 'Delete')
);

/* Problem 5
<nav>
  <ul class="left-nav">
    <li><a href="/home">Home</a><li>
    <li><a href="/contacts">Contacts</a><li>
  </ul>
  <ul class="right-nav">
    <li><a href="/profile">My Profile</a><li>
    <li><button class="logout-button">Log Out</button><li>
  </ul>
</nav>
*/

const nav = React.createElement(
  'nav',
  null,
  React.createElement(
    'ul', 
    { className: 'left-nav' },
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: "/home" },
        "Home"
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: "/contacts" },
        "Contacts"
      )
    )
  ),
  React.createElement(
    'ul', 
    { className: 'left-nav' }, 
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: "/profile" },
        "My Profile"
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'button',
        { className: "logout-button" },
        "Log Out"
      )
    )
  ),
);

/* Problem 5
<section class="tweets">
  <form class="tweet-form">
    <textarea placeholder="What are you thinking?"></textarea>
    <button type="submit">Tweet</button>
  </form>
  <ul class="tweets-list">
    <li class="tweet">
      <div class="tweet-body">Tweet 1</div>
      <div class="tweet-footer">
        User 1
      </div>
    </li>
    <li class="tweet">
      <div class="tweet-body">Tweet 2</div>
      <div class="tweet-footer">
        User 2
      </div>
    </li>
    <li class="tweet">
      <div class="tweet-body">Tweet 3</div>
      <div class="tweet-footer">
        User 1
      </div>
    </li>
    <li class="tweet">
      <div class="tweet-body">Tweet 4</div>
      <div class="tweet-footer">
        User 3
      </div>
    </li>
  </ul>
</section>
*/

const form = () => React.createElement(
  'form',
  { className: 'tweet-form' },
  React.createElement(
    'textarea',
    { placeholder: 'What are you thinking?' }
  ),
  React.createElement(
    'button',
    { type: 'submit' },
    'Tweet'
  )
);

const tweet = ({ body, user }) => React.createElement(
  'li',
  { className: 'tweet' },
  React.createElement(
    'div',
    { className: 'tweet-body' },
    body
  ),
  React.createElement(
    'div',
    { className: 'tweet-footer' },
    user
  )
);

const tweetsList = (props) => {
  return React.createElement(
    'ul',
    { className: 'tweets-list' },
    props.tweets.map((tweetInfo) => React.createElement(
      tweet, 
      tweetInfo
    ))
  )
}

const tweets = React.createElement(
  'section',
  { className: 'tweets' },
  React.createElement(form, null),
  React.createElement(tweetsList, {
    tweets: [
      { body: 'Tweet 1', user: 'User 1' },
      { body: 'Tweet 2', user: 'User 2' },
      { body: 'Tweet 3', user: 'User 1' },
      { body: 'Tweet 4', user: 'User 3' },
    ]
  })
);