function foo() {
  console.log('a'); // 1st
  bar();
  console.log('e'); // 5th
}

function bar() {
  console.log('b'); // 2nd
  baz();
  console.log('d'); // 4th
}

function baz() {
  console.log('c'); // 3rd
}

foo();

// Call Stack

// ------ top -------

// ------ bottom -------