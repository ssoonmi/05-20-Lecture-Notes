# BEM: Block-Element-Modifier

## Docs:
https://en.bem.info/


## What is BEM?

BEM is a naming convention for CSS classes that gives meaningful, specific, and maintainable class names. 
Quite often, we can have a webpage with a lot of HTML and it can be quite difficult to find appropriate CSS class names.

In the BEM model, a CSS class can be broken down into at most three parts:
* Block
* Element
* Modifier

By using BEM, we are able to keep all styles at the same level of specificity, with no style overriding the other due to being a higher level of specifity.


However, not all three parts must be present in the class name.


















## What are blocks, elements and modifiers?


- Block: A standalone entity that is meaningful on its own. 
    * Ex: header, container, menu, navbar, input
    * Its name can contain latin letters, digits, dashes


- Element: A part of a block. It has no meaning on its own 
    * Any DOM node can be a block if it accepts a class name. 
    * Any element is semantically tied to its block.
    * Within a given block, all elements are semantically equal.
    * Ex: menu item, list-item, header title, input label
    * Its name can contain latin letters, digits, dashes, underscore
    * The CSS class is formed by using first the block name, plus two underscores, plus the element name: `.block__element`


- Modifier: A flag on a block or element used to change appearance or behavior
    * Ex: disabled, color yellow, size big, fixed
    * Modifier is an extra class name which you add to a block/element DOM node.(Examples: `.button--active`, .`button__textarea--red`)
    * Add modifier classes only to blocks/elements they modify, and keep the original class (e.g. keep the class `.button` and add `.button--active`).
    * The CSS class is formed as block’s or element’s name plus two dashes: `.block--mod` OR `.block__element--mod` AND .`block--color-red`. (Spaces in complicated modifiers are replaced by dash.)

