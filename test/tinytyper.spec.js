'use strict'

import assert from 'assert'
import TinyTyper from '../src'

describe('TinyTyper constructor', () => {
  const el       = document.createElement('div')
  el.innerText = 'test string'
  const instance = new TinyTyper(el)

  it('should clear innerText of specified element', () => {
    assert.equal(el.innerText, '')
  })

  it('should create \'.tiny-typer-text\' <span> element', () => {
    const span = el.querySelector('span.tiny-typer-text')
    assert.ok(span)
  })

  it('should create \'.tiny-typer-cursor\' <span> element', () => {
    const span = el.querySelector('span.tiny-typer-cursor')
    assert.ok(span)
  })

  it('should fill cursor element with default cursor ` ▌`', () => {
    const span = el.querySelector('span.tiny-typer-cursor')
    assert.equal(span.innerHTML, ' ▌')
  })
})
