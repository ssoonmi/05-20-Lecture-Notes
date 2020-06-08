# Truthy vs Falsy
A **falsy (or falsey)** value is a value that is considered false in a Boolean context. All other values are considered **truthy**: true in a boolean context.

JavaScript will coerce the value to a Boolean **if the context requires it**, such as in conditionals and loops.

## 8 Falsy values
| Value     | Description |
| --- | --- | --- |
| false     | The keyword false |
| 0         | The number zero |
| -0        | The number negative zero |
| 0n        | BigInt 0n |
| ""        | Empty string value |
| null      | The keyword null |
| undefined | The keyword undefined |
| NaN       | The keyword NaN |

## Examples
```JS
if ({}) {
  console.log("Hi!");
} else if ("false") {
  console.log("Hola!");
} else if (-1) {
  console.log("Bonjour!");
} else {
  console.log("Bye!");
}

// prints "Hi!"
```

```JS
if (!"false") {
  console.log("Hi!");
} else if (!-Infinity) {
  console.log("Hola!");
} else if (![]) {
  console.log("Bonjour!");
} else {
  console.log("Bye!");
}

// prints "Bye!"
```
