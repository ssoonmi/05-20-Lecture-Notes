import unittest
from app.roman_numerals import parse


class TestRomanNumerals(unittest.TestCase):
    def test_i(self):
        value = parse("I")

        self.assertEqual(value, 1)

    def test_ii(self):
        value = parse("II")

        self.assertEqual(value, 2)

    def test_iii(self):
        value = parse("III")

        self.assertEqual(value, 3)

    def test_iv(self):
        value = parse("IV")

        self.assertEqual(value, 4)

    def test_v(self):
        value = parse("V")

        self.assertEqual(value, 5)

    def test_vi(self):
        value = parse("VI")

        self.assertEqual(value, 6)

    def test_vii(self):
        value = parse("VII")

        self.assertEqual(value, 7)

    def test_viii(self):
        value = parse("VIII")

        self.assertEqual(value, 8)
