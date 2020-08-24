# Q&A

1. Describe what `Block`, `Element`, and `Modifier` means in BEM
- Block: standalone entity that is meaningful on its own
    * header, container, menu, navbar, input
    * name can contain latin letters, digits, dashes

- Element: part of a block, no meaning on its own 
    * menu item, list-item, header title, input label
    * name can contain latin letters, digits, dashes, underscore
    * class formed by block name + two underscores + element name 

- Modifier: flag on a block or element used to change appearance or behavior
    * disabled, color yellow, size big, fixed
    * add modifier class to blocks/el they modify and keep original class
    * css class formed as block or el name plus two dashes



2. Identify CSS class names that follow the BEM principle.
    - Go to wednesday EOD code demo for more (W9D3)
    ```html
        <header class="header header--color>
    ```



3. Describe and use the transition property show animated changes due to class and pseudo-class CSS rule application
    - `transition-property`
       * name/names of css props to which transitions should apply
       * transition effect starts when specified CSS prop changes
    - `transition-duration`
       * duration over which transition occurs
    - `transition-delay`
       * how long to wait between time prop is changed and transition begins
    - `transition`
       * shorthand: property, duration, delay




4. Describe the overflow, overflow-x, and overflow-y properties to effect clipping and scrolling on elements
* `overflow`
    - Applies the setting(s) to both the horizontal and vertical directions.
* `overflow-x`
    - Applies the setting(s) to the horizontal direction.
* `overflow-y`
    - Applies the setting(s) to the vertical direction.


5. Describe the settings available on the overflow family of properties.

* `overflow: auto;`
    - Only show a scroll bar if the content does overflow the available space.
* `overflow: visible;`
    - This is the default. It just lets you see everything, perhaps ruining the look of the page.
* `overflow: scroll;`
    - Always show a scroll bar, even if the content doesn't need one.
* `overflow: hidden`
    - This clips the content. Anything beyond the boundary of the element is not visible.
---