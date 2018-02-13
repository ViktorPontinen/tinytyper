## VueTinyTyper - a vue component for creating a typing effect element.

#### Credits
This project is forked from https://github.com/lourenc/tinytyper .
Some parts of the readme are also originally from above repository.

#### Why
This project was created because I was missing events in the non-vue version.

#### Demo
Full credits to https://github.com/lourenc/tinytyper
<img align="center" src="https://s28.postimg.org/4qva5c1f1/tinytyper2.gif">

#### Installation
Library can be easily installed via either Yarn or NPM:

`npm i vue-tinytyper --save`

or

`yarn add vue-tinytyper`

#### Usage

Basic setup looks like this:

```js
import VueTinytyper from 'vue-tinytyper';
```
then
```js
<vue-tinytyper text="Hello, please type this out."></vue-tinytyper>
```
or
```js
<vue-tinytyper>Hello, please type this out.</vue-tinytyper>
```

Available `props`:

Prop           | Default      | Type | Description
---------------- | ------------- | ----------- | --------------
`text`           | ``           | String | The text to animate
`textSpeed`      | `95`         | Number | Defines text speed animation
`cursor`         | `&#9612;`   | String | Defines current cursor symbol
`blinkSpeed`     | `0.05`       | Number | Defines blink speed of the cursor
`containerClass` | 'tiny-typer-container'  | String | A CSS class for the container element
`cursorClass`    | `tiny-typer-cursor` | String | A CSS class for cursor element
`textClass`      | `tiny-typer-text` | String | A CSS class for text element
`staticCursor`   | `false` | Boolean | Makes cursor static (disables blinking)
`staticText`     | `false` | Boolean | Makes text static (disables animation)
`customEvents`   | `{}`   | Object  | Pass custom "on-character" events. Example: `{ '!': 'my-event' }`, where the event 'my-event' will be triggered every time the current animation character matches the object key, eg. "!".


Available `events`

Eventname     | Trigger    | Payload
------------- | ---------- | ----------
`animation-finished` | When animation doesn't have any more characters to animate | None

#### Contributions

Contributions are welcome. Feel free to create [issues](https://github.com/ViktorPontinen/vue-tinytyper/issues)

#### License

MIT
