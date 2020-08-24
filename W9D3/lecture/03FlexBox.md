# Flex Box
Styling flex-containers (parent elements) as `display: flex;` makes their width and height responsive to the viewport size.

## Key CSS Properties
* `display: flex;`
* `flex-direction: row` (or `column` or add `-reverse` to either)
* `flexwrap: wrap;` (or `nowrap` or `wrap-reverse`)
* `flex-flow` is a combination of both `wrap` and `-direction`
* `justify-content`
* `align-items`
* `align-self`
* `order`

### Baseline vs. Center vs. Flex-Start
* [Here's a great stack overflow thread on this.](https://stackoverflow.com/questions/34606879/whats-the-difference-between-flex-start-and-baseline) The long and short of it is that baseline refers to where text elements base is in the flex-container. Center, flex-start, etc. refer to to where they fit into their