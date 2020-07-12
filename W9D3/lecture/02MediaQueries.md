# Media Queries
Media queries are used to make your page responsive to different size screens and windows.
## Different Types of Media
* `all`
* `print`
* `screen`
* `speech`
* Can combine several. 
    ```
    @media screen, print { 
      /* selector(s) and style(s) here */ 
    }
    ```
## Viewport
* Adding this `<meta>` tag into your html file's `<head>` allows you to query different devices (which may disguise their actual height).
    ```
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
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
* `orientation`
    ``` 
    @media (orientation: landscape) { 
      /* selector(s) and style(s) here */ 
    }
    ```
* `width`
    ```
    @media (max-width: 750px) { 
      /* selector(s) and style(s) here */ 
    }
    ```