const jwt = require('jsonwebtoken');

const payload = {
  hello: 'world'
};

const secret = 'SHHHHH'; // put in an environment variable

const token = jwt.sign( // creating a jwt
  payload,
  secret,
  { expiresIn: 604800 } // 604,800 seconds = 1 week // optional
);

// 3 parts:
// header
// payload
// signature = hashed output of header + payload + secret

const decoded = jwt.decode(token); // frontend
// const decoded = jwt.verify(token, 'not the right secret'); // backend authorization

const atob = require('atob');
const decodedHeader = atob(token.split('.')[0]);
const decodedPayload = atob(token.split('.')[1]);

console.log({ token, decoded, decodedHeader, decodedPayload });
// const crypto = require("crypto");

// const btoa = require('btoa');

// const header = { alg: "HS256", typ: "JWT" };
// const headerEncode = btoa(JSON.stringify(header));
// const payloadEncode = btoa(JSON.stringify(payload));


// console.log({
//   headerEncode,
//   payloadEncode
// })