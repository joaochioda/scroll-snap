import './style.css'
import { setupCounter } from './counter.js'

// goTo next image
const next = document.querySelector('#next')
next.addEventListener('click', () => {
  //scroll div carousel smoothly
  const carousel = document.querySelector('.carousel')
  carousel.scrollBy(300, 0)

})

// goTo previous image
const prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
  //scroll div carousel smoothly
  const carousel = document.querySelector('.carousel')
  carousel.scrollBy(-300, 0)
})