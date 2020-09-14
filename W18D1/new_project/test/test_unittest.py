import unittest

class FirstTests(unittest.TestCase):
    def test_first(self):
        self.assertTrue(True)
    
    def test_second(self):
        self.assertFalse(False)