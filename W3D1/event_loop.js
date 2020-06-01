function somethingSlow() {
  // something that takes 4000 ms to execute
  // while(true) {
  // }
}

function foo() {
  console.log('food');
}

function bar() {
  baz(); // add to call stack after bar gets invoked
  console.log('bark');
}

function baz() {
  console.log('bazaar');
}

setTimeout(foo, 1500); // add foo to message queue after 1500 ms
setTimeout(bar, 1000); // add bar to message queue after 1000 ms
somethingSlow(); // add to call stack right away

// 500ms
// call stack       // message queue
// somethingSlow    //

// 1000ms bar gets enqueued to the queue because stack is occupied
// stack            // queue
// somethingSlow    // bar

// 1500ms foo gets enqueued to the queue because stack is occupied
// stack            // queue
// somethingSlow    // foo
//                  // bar

// 4000ms after somethingSlow is done and gets popped out of stack
// stack            // queue
//                  // foo
//                  // bar

// 4000ms bar gets pushed to the stack because nothing in stack
// stack            // queue
// bar              // foo

// 4000ms baz gets pushed to the stack because it gets called inside of bar
// stack            // queue
// baz              // foo
// bar

// 4000ms baz gets popped out of stack because it finished
// stack            // queue
// bar              // foo

// 4000ms bar gets popped out of stack because it finished
// stack            // queue
//                  // foo

// 4000ms foo gets pushed to the stack because nothing in stack
// stack            // queue
// foo              //

// 4000ms foo gets popped out of stack because it finished
// stack            // queue
//                  //