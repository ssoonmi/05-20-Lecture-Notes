# Interactivity

## CSS Tricks

https://css-tricks.com/almanac/properties/t/transform/

## Hover

We use the "hover" pseudo-class `:hover` to be able to make changes to elements when the device pointer is over an element.

In our CSS file, we will add `:hover` to the end of a selector and set any properties we want to occur when we hover over that element on the page.








## Transition

One common property to implement with a psuedo-class is the transition property. We use the transition property show animated changes due to class and pseudo-class CSS rule application. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.

List of CSS properties we can use transition on:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties





Sub properties:
    - `transition-property`
       * Specifies the name(s) of css properties to which transitions should apply
       * The transition effect starts when specified CSS prop changes
    - `transition-duration`
       * Specifies the duration over which a transition occurs
    - `transition-delay`
       * Specifies how long to wait between the time a property is changed and the transition begins
    - `transition`
       * shorthand: property, duration, delay







EX 1:

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```



EX 2:
```css
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}

```










## Overflow

By default, when we size an element to a width and height that is too small for all of the content, the browser will just show all of the content anyway. This can possibly mess up the way the page renders and displays. To fix this, we can use the overflow family of properties to specify how we want the overflow of content to be displayed.




The overflow family of properties are:
* overflow
    - Applies the setting(s) to both the horizontal and vertical directions.
* overflow-x
    - Applies the setting(s) to the horizontal direction.
* overflow-y
    - Applies the setting(s) to the vertical direction.





There are four settings that the overflow family of properties can take:
* `overflow: auto`
    - Only show a scroll bar if the content does overflow the available space.
* `overflow: visible`
    - This is the default. It just lets you see everything, perhaps ruining the look of the page.
* `overflow: scroll`
    - Always show a scroll bar, even if the content doesn't need one.
* `overflow: hidden`
    - This clips the content. Anything beyond the boundary of the element is not visible.




Examples of CSS Overflow:
https://codepen.io/aa-academics/pen/jOPeNmp?editors=1100

