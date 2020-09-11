####### IF STATEMENTS #######
#
# In this problem, write a function named "good_or_bad" that takes
# an integer parameter and returns the corresponding value found in this table
#
# | Input                      | Output                  |
# |----------------------------|-------------------------|
# | "Coffee"                   | "Good"                  |
# | "Ice Cream"                | "Good"                  |
# | "Phone in Toilet"          | "Bad"                   |
# | "Sleeping through alarm"   | "Bad"                   |
# | "6 Pieces of plain bread"  | "Okay?"                 |
# | "Doe"                      | "A dear, a female dear" |
#
# If your function gets any other string than those listed in the input column,
# it should return None.
#
# Your code must include the following number of branching statements
# * 1 if statement
# * 3 elif statements
# * 1 else statement
#
# All inputs are guaranteed to be strings.
#
# There are seven sample data calls for you to use.

# WRITE YOUR FUNCTION HERE


# TEST DATA
print("good_or_bad test1:", good_or_bad("Coffee")) # => "Good"
print("good_or_bad test2:", good_or_bad("Ice Cream"))  # => "Good"
print("good_or_bad test3:", good_or_bad("Phone in Toilet")) # => "Bad"
print("good_or_bad test4:", good_or_bad("Sleeping through alarm"))  # => "Bad"
print("good_or_bad test5:", good_or_bad("6 Pieces of plain bread")) # => "Okay?"
print("good_or_bad test6:", good_or_bad("Doe"))  # => "A dear, a female dear"
print("good_or_bad test7:", good_or_bad("Jokes Ed or Justin made that are funny")) # => None
