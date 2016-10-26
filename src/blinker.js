/**
 * @author Korney Vasilchenko
 * @description Basic module for making specified element blink
 */
'use strict'

/**
 * Browser check
 */
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  (callback => {
    window.setTimeout(callback, 1000 / 60)
  })

window.requestAnimationFrame = requestAnimationFrame

/**
 * Creates fade-out effect
 * @param  {Element}   el
 * @param  {Number}   speed
 * @param  {Function} callback
 */
export function fadeOut (el, speed, callback) {
  el.style.opacity = 1
  const fade = () => {
    if ((el.style.opacity -= speed) < 0) {
      el.style.opacity = 0
      callback()
    } else {
      requestAnimationFrame(fade)
    }
  }
  fade()
}

/**
 * Creates fade-in effect
 * @param  {Element}   el
 * @param  {Number}   speed
 * @param  {Function} callback
 */
export function fadeIn (el, speed, callback) {
  el.style.opacity = 0

  const fade = () => {
    let val = parseFloat(el.style.opacity)
    if (!((val += speed) > 1)) {
      el.style.opacity = val
      requestAnimationFrame(fade)
    } else {
      el.style.opacity = 1
      callback()
    }
  }

  fade()
}

/**
 * Makes DOM Element blink
 * @param  {Element} el
 * @param  {Number} speed
 * @returns {Object}
 */
const blink = (el, speed) => {
  /* Element configuration */
  let isStopped  = false

  /* Interval control */
  el.style.opacity = 1
  const tick = () => {
    if (!isStopped) {
      fadeIn(el, speed, () => {
        fadeOut(el, speed, () => tick())
      })
    }
  }
  const start = () => { isStopped = false; tick() }
  const stop  = () => (isStopped = true)

  tick()
  return { stop, start }
}

export default blink
