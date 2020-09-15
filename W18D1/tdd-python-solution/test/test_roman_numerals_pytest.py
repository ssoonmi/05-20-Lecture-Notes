from app.roman_numerals import parse
from pytest import mark


@mark.parametrize("s,expected", [
    ("IX", 9), ("X", 10), ("XI", 11), ("XIV", 14), ("XIX", 19), ("XX", 20),
    ("XXXIV", 34), ("XLI", 41), ("L", 50), ("XCIX", 99), ("C", 100),
    ("CCCXXXIII", 333), ("DLV", 555), ("CDXLIX", 449), ("MCMLXXII", 1972),
])
def test_roman_numeral_parser(s, expected):
    result = parse(s)

    assert result == expected
