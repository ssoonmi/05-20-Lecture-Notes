####### FOR LOOP #######
#
# In this problem, write a function named "my_for_filter" that accepts an
# iterable of strings and a suffix str as parameters and returns a new list with
# strings from the original list if they end with the suffix. The function
# must use a for loop in its implementation, but not the built in filter.
#
# The str object in Python has a method on it named "endswith".
#
# There are two sample data calls for you to use.
#
# WRITE YOUR FUNCTION HERE


# TEST DATA
test1 = ["plop", "", "drip", "zop", "stop"]
print("my_for_filter test1:", my_for_filter(test1, "op")) # => ["plop", "zop", "stop"]

test2 = ["plop", "", "drip", "zop", "stop"]
print("my_for_filter test2:", my_for_filter(test2, "mop"))  # => []
