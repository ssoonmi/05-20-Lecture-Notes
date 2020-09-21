import threading
from time import sleep

lock1 = threading.Lock()
lock2 = threading.Lock()

def func1():
  with lock1:
    sleep(0.1)
    with lock2:
      print("func1")

def func2():
  with lock2:
    sleep(0.1)
    with lock1:
      print("func2")

thread1 = threading.Thread(target=func1)
thread2 = threading.Thread(target=func2)
thread1.start()
thread2.start()

# Avoid this situation by using shared locks in the same order!!!