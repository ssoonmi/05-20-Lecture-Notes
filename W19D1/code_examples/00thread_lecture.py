import threading

##### Example 1 #####
def func():
  for _ in range(50):
    # if _ == 45:
    #   print("exiting at 45")
    #   return
    print("Me first!")

thread = threading.Thread(target=func)
thread.start()

for _ in range(50):
  print("No, me, Pick me!")




##### Example 2 #####
# from random import randint
# from time import sleep

def sleepy(s):
  print(f"Hello, {s}!")
  sleep_time = randint(0, 3)
  print(f"{s} is sleeping for {sleep_time} seconds")
  sleep(sleep_time) # enters the thread wait state
  print(f"Good-bye, {s}!")

# thread1 = threading.Thread(target=sleepy, args=("Judy",))
# thread2 = threading.Thread(target=sleepy, args=("Petra",))
# thread1 = threading.Thread(target=sleepy, daemon=True, args=("Judy",))
# thread2 = threading.Thread(target=sleepy, daemon=True, args=("Petra",))
# thread1.start()
# thread2.start()

# print("All threads started.")
# thread1.join()
# thread2.join()
# print("Done with this")