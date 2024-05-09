//? Navbar 

//* Scroll

const nav = document.getElementById("navbar")
const sticky = nav.offsetTop

function scrollNav() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}


// //? scroll "github" horizontally

const SCROLL_BEFORE_AMOUNT = 450
const SCROLL_AFTER_AMOUNT = 450

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY
  const sectionPositions = {
    project4: document.querySelector('.project4').offsetTop,
    project3: document.querySelector('.project3').offsetTop,
    project2: document.querySelector('.project2').offsetTop,
    project1: document.querySelector('.project1').offsetTop
  }

  const projectClasses = ['project4', 'project3', 'project2', 'project1']

  projectClasses.forEach(project => {

    const button = document.querySelector(`.${project} .scroll-side`)

    if (scrollY > sectionPositions[project] - SCROLL_BEFORE_AMOUNT) {
      if (scrollY > sectionPositions[project] + SCROLL_AFTER_AMOUNT) {
        button.classList.remove('show-up')
        button.classList.add('show-down')
      } else {
        button.classList.add('show-up')
        button.classList.remove('show-down')
      }
    } else {
      button.classList.remove('show-down', 'show-up')
    }
  })
})



//? Title typing effect

const text = 'Junior Software Engineer with a background in Fashion Design.'

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



// *Experiences

// const scrollSides = document.querySelectorAll('scroll-left')
// let lastScrollPositions = new Array(scrollSides.length).fill()
// let isMoving = new Array(scrollSides.length).fill(false)
// when github is stop color
// scrollSides.forEach((scrollSide, i) => {

//   scrollSide.addEventListener('transitionend', () => {
//     isMoving[i] = false
//     scrollSide.style.backgroundColor = 'transparent'
//     scrollSide.style.color = '#3C3C3C'
//   })
// })

// SCROLL_BEFORE_AMOUNT > 1500
// projectClasses.forEach(project => {
//   if (scrollY > sectionDownPositions[project] - SCROLL_BEFORE_AMOUNT) {
//     const button = document.get(`.${project} #rigth`)
//     button.classList.remove('show')
//     button.classList.add('hide')
//   }
// })

// scrollSides.forEach((scrollSide, i) => {
//   // track previous position
//   const scrollDelta = scrollY - lastScrollPositions[i]
//   lastScrollPositions[i] = scrollY

//   // // Color when is moving
//   // isMoving[i] = Math.abs(scrollDelta) > 0

//   // retrive the current transformation
//   const currentTransform = getComputedStyle(scrollSide).transform

//   if (currentTransform) {
//     const currentTranslateX = parseFloat(currentTransform.split(',')[4])
//     // maxium limit for horizontal move
//     const maxTranslateX = 200
//     // new horizontal position
//     const newTranslateX = currentTranslateX - scrollDelta
//     const finalTranslateX = Math.min(maxTranslateX, Math.max(0, newTranslateX))
//     // Make sure doesn't pass the limit
//     scrollSide.style.transform = `translateX(${finalTranslateX}px)`

//     // if (isMoving[i]) {
//     //   scrollSide.style.backgroundColor = 'var(--angle-color)db'
//     //   scrollSide.style.color = '#f3f3f3'
//     // } else {
//     //   scrollSide.style.backgroundColor = 'transparent'
//     //   scrollSide.style.color = '#3C3C3C'
//     // }
//   }
// })
// })