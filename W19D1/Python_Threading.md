# Introduction to Threading Video (28 minutes)

### Thread: 
A chunk of code that will always run together (example: `console.log(n)`)

## Single-threaded:
At no point, will any part of your code run concurrently with another. It all runs in execution order.

Javascript is a Single-threaded language and uses asynchronous code to pause execution while waiting for another process to complete.

JS code example from Curtis's Video (timestamp - 3:58):
```Javascript
const d = {};
fs.readFile('data1.json', 'utf-8', (err, data) => {
  if (err) return;
  data= JSON.parse(data);
  for [key, value] in Object.entries(data) {
    d[key] = value;
  }
})

fs.readFile('data2.json', 'utf-8', (err, data) => {
  if (err) return;
  data = JSON.parse(data);
  for [key, value] in Object.entries(data) {
    d[key] = value;
  }
})
```

## Concurrency:
Two different pieces of code running at the same time

In Python, you have a main thread, but you (or your framework) can create other threads!

Python example from Curtis's Video (timestamp - 13:28):
```Python
01    x = 0
02
03    def on_thread_1():
04        # below is essentially how the computer would evaluate x = x + 1
05        a = x
06        a = a + 1
07        x = a
08        print(x)
09
10    def on_thread_2():
11        b = x
12        b = b + 1
13        x = b
14        print(x)
```

Can sometimes print:
* 1 then 2 
    * The first function completes and prints. `x` is 1 at this point.
    * The second function completes and prints. `x` is now 2.
* 2 then 2
    * The first function is interrupted after line 7, just before it prints. We have already updated `x`'s value on line 7. 
    * The second function runs all the way through its print on line 14, updating `x` to be 2 on line 13.
    * Then, the first function resumes on line 8, printing the current value of `x`, which was assigned 2 on line 13.
* 1, then 1
    * The first function is interrupted after line 6, before it updates the value of `x`. `x` remains 0, but `a` on line 6 is 1.
    * The second function runs, but is interrupted after line 12 just before reassigning `x`. `x` is still 0, and `a` on line 12 is now also 1.
    * The first function resumes on line 7, assigning `x` to the value of thread1's `a` and printing that value.
    * The second function resumes on line 13, sets `x` to the value of `a` (which is still 1 in this scope), and prints that value, again.

## How Python Handles Thread Synchronization
* Lock
    * Allows only 1 thread of code to execute at a time
* Barrier
    * Synchronizes thread so they all start code at the same time
* Semaphore
    * Allows a certain number of threads resources at a certain time

## CPython's Global Interpreter Lock
* There is only one actual thread of execution at the same time.
* BUT, multiple threads have access to the same memory! Even if one is paused/interrupted while the other is running, they both can interact with the same variables, causing the same issues as can occur with true-multi-threaded languages.


## Syntax to know before the next video:
#### Create a thread:
```Python
thread1 = threading.Thread(target=callable, {args=tuple_of_args, {daemon=None}})
```
#### Start a Thread:
```Python
thread1.start()
```
#### Create a Lock:
```Python
lock1 = threading.Lock()
```
#### Acquire a Lock:
```Python
with lock1:
  #do stuff
```



# Threading Demo Video (15 minutes)


## What is the difference between a Foreground (non-Daemon) thread and a Background (Daemon) Thread in Python??
___
___
___
___
___
While a Forground thread is running, the main thread will not shut down. If you enable `daemon=True` when creating a thread, the main thread stops running when the Daemon, or Background Thread(s) complete.

## [Dead(Thread)lock](./code_examples/02deadlock.py)
When two threads of code are trying to gain access to the same `Lock()` instance at the same time. Both threads end up waiting.......... and waiting..... and waiting....

## Practical Example 
* Two cashiers at a fast food place put orders for fries and a strawberry milkshake into their system simultaneously. The order submission dispatches actions that:
    * Displays the order on the screen by the griddle.
    * Updates the inventory in the database, removing materials used for each order
* What could be some critical sections?
___
___
___
___
___
* Threading allows these actions to run concurrently, but you must be careful to prevent:
    * The order printing strangely on the screen (ex: half of one order, then half of the other)
    * The inventory of fries/milkshake being incorrectly updated.




## [Threading Syntax from the Docs](https://docs.python.org/3/library/threading.html#threading.Thread)


* Navigation
    * [Alpine Linux](./Alpine_Linux.md)
    * [Linux Basics](./Linux_Basics.md)
    * [Back to LOs](./README.MD)