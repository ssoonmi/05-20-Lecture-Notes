# GETTERS AND SETTERS
# 
# Create a class "GetItSetIt" that will be initialized with a single value
#   Write a getter and a setter for this value
#   Write a method called forget which will assign the value to None
# 
# 
# 
#  --- YOUR CODE HERE ---




#
#  ------ EXAMPLES ------
#

get_set = GetItSetIt("my super secret secret")
print(get_set.value)  # => "my super secret secret"

get_set.value = "my even secreter secret"
print(get_set.value)  # => "my even secreter secret"

get_set.forget()
print(get_set.value)  # => None
