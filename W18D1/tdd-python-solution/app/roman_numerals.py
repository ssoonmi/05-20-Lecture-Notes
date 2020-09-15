
def parse(s):
    padded = f"{s} "
    total = 0
    values = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    deltas = {"IV": -1, "IX": -1, "XL": -10, "XC": -10, "CD": -100, "CM": -100}
    for index in range(len(padded) - 1):
        next_two = f"{padded[index]}{padded[index + 1]}"
        if next_two in deltas:
            total += deltas[next_two]
        elif padded[index] in values:
            total += values[padded[index]]
    return total
