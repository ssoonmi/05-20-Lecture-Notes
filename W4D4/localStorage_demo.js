const data = {

};

data.key = ["value"]

// console.log(data.key);
// console.log(data["key"]);

localStorage.setItem('key', JSON.stringify({
  "key1": "value",
  "key2": "value",
}));

console.log(JSON.parse(localStorage.getItem('key')));