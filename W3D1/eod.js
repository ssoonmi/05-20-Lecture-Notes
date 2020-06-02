let count = 10

function afterOneSecond() {
  console.log('1 seconds is up!');
  count--;
  if (count !== 0) {
    setTimeout(afterOneSecond, 1000);
  }
}

const timeout = setTimeout(afterOneSecond, 1000);