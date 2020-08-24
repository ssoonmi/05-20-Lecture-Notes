# Positioning and the Box Model
## Key CSS Properties 
* `position`
    * `fixed`, `relative`, `absolute`
* `z-index`



## 5 Types of Positions
#### 1. Static:
This is the default for a box-model element (not actually positioned)
#### 2. Relative
The element's position can be adjusted relative to its original location.
#### 3. Absolute
The rest of the page's elements do not affect this one. It is positioned based on the location of its nearest ancestor **that is also positioned** (ex: relative, absolute, fixed). If it can't find one, it is positioned relative to the `<html>` document.
#### 4. Fixed
The element is flying solo. It's position is relative to the viewport and unaffected by other elements.
#### 5. Sticky
Element is relative until a condition is met. Then it becomes fixed to a page.