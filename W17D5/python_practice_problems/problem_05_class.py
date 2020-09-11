# CLASS DECLARATION
#
# Declare a class named "ChestOfDrawers" with the following features:
#
# * A constructor that takes two values, a location, a total number of 
#   drawers, and initializes a count of full drawers at 0.
# * A method named "fill_drawer" that increases the number of full drawers
#   by one. Calling this method over and over should never result in more filled 
#   drawers than there are in the chest.
# * A method named "empty_drawer" that decreases the number of filled drawers
#   by one. Calling this method over and over should never result in a number of
#   full drawers less than 0.
# * A "__repr__" method that with the format
#     "<{location} ({full_drawers})>"
#
# Test data at the bottom.

# WRITE YOUR CODE HERE


# Test calls
drawers = ChestOfDrawers("Bedroom", 3)
print(drawers)  # > "<Bedroom (0)>"

drawers.fill_drawer()
print(drawers)  # > "<Bedroom (1)>"

drawers.fill_drawer()
drawers.fill_drawer()
print(drawers)  # > "<Bedroom (3)>"

drawers.fill_drawer()
print(drawers)  # > "<Bedroom (3)>"

drawers.empty_drawer()
print(drawers)  # > "<Bedroom (2)>"

drawers.empty_drawer()
drawers.empty_drawer()
print(drawers)  # > "<Bedroom (0)>"

drawers.empty_drawer()
print(drawers)  # > "<Bedroom (0)>"
