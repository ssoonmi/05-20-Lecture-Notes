class Stack:
    def __init__(self):
        self._values = []

    def __len__(self):
        return len(self._values)

    def peek(self):
        return self._values[-1]

    def pop(self):
        return self._values.pop()

    def push(self, value):
        self._values.append(value)
