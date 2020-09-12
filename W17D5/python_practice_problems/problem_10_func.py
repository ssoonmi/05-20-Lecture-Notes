#  Write a function "comparison" that takes in a single parameter, a function.
# 
#  "comparison" will return another function that accepts list containing 2 
#     numbers. 
# 
#  Each of these numbers will be invoked on the original function recieved as 
#      an argument by "comparison".
#
#  When the numbers are invoked on the original function we will compare the 
#     return values:
#
#     If the return value of the first number is greater than the return value 
#     of the second number:
#          return 1
#     If the return value of the first number is less than than the return value
#     of the second number:
#          return -1
#     If the return value of the first number is equal to the return value of 
#     the second number:
#          return 0
# 
# 
# 
#  --- YOUR CODE HERE ---




# 
#  ------ EXAMPLES ------
# 

def negation(num):
    return num * -1

neg = comparison(negation)
print(neg(1, 3)) # => 1
print(neg(5, 3)) # => -1
print(neg(7, 7)) # => 0


def times_zero(num):
    return num * 0

zeroed = comparison(times_zero)
print(zeroed(1, 3))  # => 0
print(zeroed(5, 3))  # => 0


def nth_perfect_square(num):
    odds = list(filter(lambda num: num % 2, range(abs(num) * 2)))
    return sum(odds)

compare_perf_sqrs = comparison(nth_perfect_square)
print(compare_perf_sqrs(1, 3))  # => -1
print(compare_perf_sqrs(5, 3))  # => 1
print(compare_perf_sqrs(-4, 4))  # => 0
