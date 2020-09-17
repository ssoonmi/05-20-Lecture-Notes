# More on Classes

[More on Classes Code]

## Class Variables

A class variable is a variable assigned to the class, not the instance.

Can access class variables THROUGH the instance as well

Example of creating a class variable:

```py
class Deck:
    _SUITS = ("Hearts", "Diamonds", "Clubs", "Spades")
```

Example of using a class variable:

```py
print(Deck._SUITS) # ("Hearts", "Diamonds", "Clubs", "Spades")

deck = Deck()
print(deck._SUITS) # ("Hearts", "Diamonds", "Clubs", "Spades")
```

## Class Methods

A class method is a method that can be called on the class and takes 
the class as its first argument and the rest of the arguments are then passed
in.

Use the `classmethod` decorator to wrap a function to make it a class method

Example of creating a class method:

```py
class Deck:
    # ...

    # class method definiton using classmethod decorator
    @classmethod
    def stripped_deck(cls, *args):
        """
        Class method to create a deck
        with the specified cards removed.
        """
        deck = cls()
        deck._cards = [card for card in deck._cards
                       if card.rank_value not in args]
        return deck

```

Example of using a class method:

```py
deck = Deck.stripped_deck(2, 3, 4, 5, 6)
```

## Static Methods

A static method is a method that can be called on the class but does not take 
the class as its first argument.

Use the `staticmethod` decorator to wrap a function to make it a static method

Example of creating a static method:

```py
class Card:
    # ...

    # static method definition using the staticmethod decorator
    @staticmethod
    def max(*args, aces_high=False):
        """
        Static method to compare two or more cards and
        return the one with the highest rank.
        """
        return max(
            args,
            key=lambda card: card.adjusted_rank_value(aces_high=aces_high))
```

Example of using a static method:

```py
ace_of_hearts = deck.cards[0]
two_of_hearts = deck.cards[1]
three_of_hearts = deck.cards[2]

print(Card.max(ace_of_hearts, two_of_hearts, aces_high=True))
# Ace of Hearts
print(Card.max(two_of_hearts, ace_of_hearts, aces_high=True))
# Ace of Hearts
```


[More on Classes Code]: ./more-on-classes.py