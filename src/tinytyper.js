/**
 * @module TinyTyper
 * @author Korney Vasilchenko
 */
'use strict'

import blink from './blinker'

class TinyTyper {
  /**
   * Constructor
   * @param  {Element} el
   * @param  {Object} options
   */
  constructor (el, options = {}) {
    this.element = el
    this.cursor  = document.createElement('span')
    this.textEl  = document.createElement('span')
    this.options = options

    this.text = options.text || el.innerText

    /* Clear element's content and set default text */
    this.textEl.className = options.textClass || 'tiny-typer-text'
    this.cursor.className = options.cursorClass || 'tiny-typer-cursor'
    this.cursor.innerHTML = options.cursor || ' &#9612;'

    this.init()
  }

  /**
   * Initializes whole element
   */
  init () {
    this.element.innerHTML = ''
    this.element.innerText = ''
    this.element.appendChild(this.textEl)
    this.element.appendChild(this.cursor)
    if (!this.options.staticCursor) this.blinker = blink(this.cursor, this.options.blinkSpeed || 0.05)
    if (!this.options.staticText) {
      this.animate()
    } else {
      this.redraw(this.text)
    }
  }

  animate () {
    let symbols = this.text.split('')
    let result  = []
    let animation = () => setTimeout(tick, this.options.textSpeed || 95)
    let tick      = () => {
      result.push(symbols.shift())
      this.redraw(result.join(''))
      if (symbols.length) animation()
    }

    animation()
  }

  /**
   * Redraws main text
   * @param  {String} text
   */
  redraw (text) {
    this.textEl.innerText = text
  }
}

export default TinyTyper
