# Prompt

We want to write a dog class which will do the following:

* instances should have a `name` property which is set when the instance is created.

* have an instance method called `bark` which returns a string formatted as `"${this.name} is barking"`

* have an instance method `chainChaseTail` which takes a number and calls the helper method `chaseTail` that number of times. When given an argument that is not a number, `chainChaseTail` should throw a `TypeError`.

* a class method `cleanPaws` which takes an array of dogs and returns an array where each element of the array is a string formatted as `I cleaned "${this.name}'s paws`