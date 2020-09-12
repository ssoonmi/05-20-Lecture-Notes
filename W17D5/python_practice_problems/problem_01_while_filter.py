####### WHILE LOOP #######
#
# In this problem, write a function named "my_while_filter" that accepts an
# iterable of integers as a parameter and returns a new list with only the even
# integers remaining. The function must use a while loop in its implementation,
# but not the built in filter.
#
# There are three sample data calls for you to use below.

# WRITE YOUR FUNCTION HERE


# TEST DATA
test1 = [2]
print("my_while_filter test1:", my_while_filter(test1)) # => [2]
test2 = list(range(40))
print("my_while_filter test2:", my_while_filter(test2)) # => [2, 4, 6, 8, 10, 12, 14, 16, ... 38]
test3 = []
print("my_while_filter test3:", my_while_filter(test3)) # => []
