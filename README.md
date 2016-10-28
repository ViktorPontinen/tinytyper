## ⌨️  TinyTyper - a tiny library for creating a typing effect on specified text element.
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/lourenc/tinytyper.svg?branch=develop)](https://travis-ci.org/lourenc/tinytyper)
[![Dependency Status](https://gemnasium.com/badges/github.com/lourenc/tinytyper.svg)](https://gemnasium.com/github.com/lourenc/tinytyper)

#### Demo
<img align="center" src="http://g.recordit.co/8MTkbe9Crg.gif">

#### Size (It's really tiny)
  - Minimized: 2.9KB
  - Gziped:    1.1KB

#### Installation
Library can be easily installed via either NPM or Bower:

`npm i tinytyper --save`

OR

`bower i tinytyper --save`

#### Usage

Basic setup looks like this:

```js
import TinyTyper from 'tinytyper';

const el       = document.querySelector('.text-el')
const options  = { /* . . . */ }
const instance = new TinyTyper(el, options)
```

In case you need to run animation again: 
```js
instance.animate()
```

Available `options`:

Option        | Default      | Description
------------- | -------------|--------------
`text`        | `innerText` of specifed `el`ement | Sets a text to be displayed
`textSpeed`   | `95`           | Defines of text speed animation
`cursor`      | ` &#9612;`   | Defines current cursor symbol
`blinkSpeed`  | `0.05`         | Defines blink speed of a cursor
`cursorClass` | `tiny-typer-cursor` | A CSS class for cursor element
`textClass`   | `tiny-typer-text` | A CSS class for text element
`staticCursor`| `false` | Makes cursor static (disables blinking)
`staticText`  | `false` | Makes text static (disables animation)

#### Contributions

Contributions are welcome. Feel free to create [issues](https://github.com/lourenc/tinytyper/issues) and [PRs](https://github.com/lourenc/tinytyper/pulls)
