# Visualizing Scope And Closures

```js
1  function createCounter() {
2      let counter = 0;
3 
4      return function() {
5         counter += 1;
6         return counter;
7      }
8  }
9
10  var counter = createCounter();
11
12  console.log("counter1: " + counter());
13  console.log("counter1: " + counter());
14
15  const counter2 = createCounter();
16  console.log("counter2: " + counter2());
```

`t0: before line 1`

```js
{
    counter: undefined
}
```

`t1: after line 1`

```js
{
    counter: undefined,
    createCounter: [Function#1#createCounter]
}
```

`t2: line 10`

```js
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 0,
        anon: [Function#2#anon]
    }
}
```

`t3: after line 12`

```js
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 1,
        anon: [Function#2#anon]
        AFS: { // anonymousFunctionScope
            
        }
    }
}
```

`t4: after line 13`

```js
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 2,
        anon: [Function#2#anon],
        AFS: { // returned
            
        },
        AFS2: { // anonymousFunctionScope

        }
    }
}
```

`t5: after line 15`

```js
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 2,
        anon: [Function#2#anon],
        AFS: { // returned
            
        },
        AFS2: { // returned

        }
    },
    CCFS2: { // createCounterFunctionScope #2!
        counter: 0,
        anon: [Function#3#anon]
	},
    counter2: [Function#3#anon]
}
```

`t6: after line 16`

```js
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 2,
        anon: [Function#2#anon],
        AFS: { // returned
            
        },
        AFS2: { // returned

        }
    },
    CCFS2: { // createCounterFunctionScope #2!
        counter: 1,
        anon: [Function#3#anon],
        AFS: { // anonymousFunctionScope
            
        },
	},
    counter2: [Function#3#anon]
}
```