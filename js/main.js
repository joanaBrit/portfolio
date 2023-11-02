//? Navbar scroll

const nav = document.getElementById("main-nav")
const sticky = nav.offsetTop

function scrollNav() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}


// //? scroll "github" horizontally

const scrollSides = document.querySelectorAll('.scroll-side')
let lastScrollPositions = new Array(scrollSides.length).fill(0)
let isMoving = new Array(scrollSides.length).fill(false)
// when github is stop color
scrollSides.forEach((scrollSide, i) => {

  scrollSide.addEventListener('transitionend', () => {
    isMoving[i] = false
    scrollSide.style.backgroundColor = 'transparent'
    scrollSide.style.color = '#3C3C3C'
  })
})
window.addEventListener('scroll', () => {

  const scrollY = window.scrollY

  scrollSides.forEach((scrollSide, i) => {
    // track previous position
    const scrollDelta = scrollY - lastScrollPositions[i]
    lastScrollPositions[i] = scrollY

    // Color when is moving
    isMoving[i] = Math.abs(scrollDelta) > 0

    // retrive the current transformation
    const currentTransform = getComputedStyle(scrollSide).transform

    if (currentTransform) {
      const currentTranslateX = parseFloat(currentTransform.split(',')[4])
      // maxium limit for horizontal move
      const maxTranslateX = 200
      // new horizontal position
      const newTranslateX = currentTranslateX - scrollDelta
      const finalTranslateX = Math.min(maxTranslateX, Math.max(4, newTranslateX))
      // Make sure doesn't pass the limit
      scrollSide.style.transform = `translateX(${finalTranslateX}px)`

      if (isMoving[i]) {
        scrollSide.style.backgroundColor = '#ff340adb'
        scrollSide.style.color = '#f3f3f3'
      } else {
        scrollSide.style.backgroundColor = 'transparent'
        scrollSide.style.color = '#3C3C3C'
      }
    }
  })
})

//? Title typing effect

const text = 'Hi! I\'m a Full-Stack Web Developer and a Fashion Designer.'

let index = 0
let type = document.getElementById('text-type')
let intervalID

function writeText() {
  type.innerHTML = text.slice(0, index)

  if (index > text.length) {
    clearInterval(intervalID)
  } else {
    index++
  }
}
intervalID = setInterval(writeText, 100)