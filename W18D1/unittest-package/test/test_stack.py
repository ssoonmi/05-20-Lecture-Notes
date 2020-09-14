import unittest
from stack import Stack


class TestStack(unittest.TestCase):
    def test_constructor_is_no_arg(self):
        # Arrange

        # Act
        Stack()

        # Assert

    def test_new_stack_has_zero_elements(self):
        # Arrange
        s = Stack()

        # Act
        result = len(s)

        # Assert
        self.assertEqual(result, 0)

    def test_push_increases_count_by_one(self):
        # Arrange
        s = Stack()

        # Act
        s.push(True)

        # Assert
        self.assertEqual(len(s), 1)

    def test_peek_returns_last_item_but_does_not_remove_it_from_stack(self):
        # Arrange
        s = Stack()

        # Act
        s.push(True)

        # Assert
        self.assertEqual(s.peek(), True)

    def test_pop_returns_last_pushed_item_and_removes_it(self):
        # Arrange
        s = Stack()
        s.push(6.28)

        # Act
        result = s.pop()

        # Assert
        self.assertEqual(result, 6.28)

    def test_pushing_lots_of_values_makes_count_increase(self):
        # Arrange
        s = Stack()

        # Act
        for index in range(100):
            s.push(index)

        # Assert
        self.assertEqual(len(s), 100)

    def test_popping_lots_of_values_makes_count_decrease(self):
        # Arrange
        s = Stack()

        # Act
        for index in range(100):
            s.push(index)
        for index in range(50):
            s.pop()

        # Assert
        self.assertEqual(len(s), 50)

    def test_peeking_still_returns_last_pushed_element_not_popped(self):
        # Arrange
        s = Stack()

        # Act
        for index in range(100):
            s.push(index)
        for index in range(50):
            s.pop()

        # Assert
        self.assertEqual(s.peek(), 49)
