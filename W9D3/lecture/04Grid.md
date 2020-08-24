# Grid
* A two-dimensional CSS styling method with two main components:
    1. Grid-container (parent element) has the grid laid out inside of it.
    2. Grid-items (children element) are placed in the grid-container's grid.
* The container is styled into a grid and items are placed into that grid.

## Key CSS Properties
* For grid-containers:
    * `display: grid;`
    * `grid-template-rows: {row size} {row size} {etc.};`
    * `grid-template-columns: {column size} {column size} {etc.};`
    * Sizes can be in `px`, `%`, and/or `fr`s (fractions)
    * `grid-template-areas`
    * `grid-column-gap`
    * `grid-row-gap`
    * shorthand: `grid-gap`
    * `justify-items` - horizontally in row
    * `align-items` - vertically in column
* For grid-items:
    * `grid-area: {area-name};`
    * `grid-column` 
    * `grid-column-start`
    * `grid-column-end`
    * `grid-row`
    * `grid-row-start`
    * `grid-row-end`