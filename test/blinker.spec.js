'use strict'

import assert from 'assert'
import { fadeOut, fadeIn } from '../src/blinker'

describe('Fade-out effect', () => {
  const el = document.createElement('div')

  before(done => fadeOut(el, 0.05, done))
  it('should set element\'s opacity to 0 after fadeOut()', () => {
    assert.equal(el.style.opacity, 0)
  })
})

describe('Fade-in effect', () => {
  const el = document.createElement('div')

  before(done => fadeIn(el, 0.05, done))
  it('should set element\'s opacity to 1 after fadeIn()', () => {
    assert.equal(el.style.opacity, 1)
  })
})
