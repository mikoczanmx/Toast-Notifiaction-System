# Toast Notifications System

A lightweight toast notification demo built with plain HTML, CSS, and
JavaScript. It supports four notification types, four screen positions, a
custom message, and a configurable display duration.

## Live demo

[Open the live demo](https://your-live-demo-url.example)

## Features

- Success, warning, information, and danger toast styles
- Top-center, bottom-center, bottom-left, and bottom-right positions
- Custom notification message and duration
- Opacity transitions when notifications appear and disappear
- Multiple notifications can be displayed at the same position
- No external libraries or dependencies

## Run locally

Clone or download this repository, then open `index.html` in a web browser.
No build step or package installation is required.

## Usage

Choose a position, enter the message and duration in milliseconds, then click
the button for the desired toast type.

The `showToast` function is defined in `app.js` and accepts four arguments:

```js
showToast(duration, accent, content, position);
```

Example:

```js
showToast(3000, "success", "Changes saved.", "right-down");
```

Invalid durations, accents, or positions are reported in the browser console.
