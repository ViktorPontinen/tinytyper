'use strict'

import assert from 'assert'
import { fadeOut, fadeIn } from '../src/blinker'

describe('fadeOut()', () => {
  const el = document.createElement('div')

  before(done => fadeOut(el, 0.05, done))
  it('should set element\'s opacity to 0 after fadeOut()', () => {
    assert.equal(el.style.opacity, 0)
  })
})

describe('fadeIn()', () => {
  const el = document.createElement('div')

  before(done => fadeIn(el, 0.05, done))
  it('should set element\'s opacity to 1 after fadeIn()', () => {
    assert.equal(el.style.opacity, 1)
  })
})
