# Media Queries
Media queries are used to make your page responsive to different size screens, windows, and devices.
## Viewports
* The screen/device/window's width where your `html` (styled by your `css`) is being rendered.
* Check it out in the inspector
* There are lots of different viewports: [CSS-Tricks: Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)


## Parts of a Media Query
```
@media ${media-type}, (${media-feature}: ${feature-value}) {
  ${css-selector} {
    ${css-style}: ${style-value};
    ...
  }
}
```
1. `@media`
2. Media Types
    * `all`
    * `print`
    * `screen`
    * `speech`
3. Media Features
    * `aspect ratio`
    * `height`
    * `width`
    * `orientation`
4. Selectors and styles



## Using Media Features
* `aspect ratio`
    ```
    @media (aspect-ratio: 1/1) { 
      /* selector(s) and style(s) here */ 
    }
    ```
* `height`
    ```
    @media (min-height: 500px) { 
      /* selector(s) and style(s) here */ 
    }
    ```
* `width`
    ```
    @media (max-width: 750px) { 
      /* selector(s) and style(s) here */ 
    }
    ```
* `orientation`
    ``` 
    @media (orientation: landscape) { 
      /* selector(s) and style(s) here */ 
    }
    ```