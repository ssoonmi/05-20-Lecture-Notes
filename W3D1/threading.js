function nextTask() {
  console.log('starting task');

  while(true) {

  }

  console.log('done with task!');
}

setTimeout(function() {
  console.log('time\'s up!');
}, 1000);

nextTask();

// setTimeout should be printing time's up after 1 second, but nextTask is 
// taking a very long time and not allowing the setTimeout function to run
// If JavaScript was a multi-threaded language, this would not be a problem.