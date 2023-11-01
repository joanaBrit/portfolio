// ? Navbar scroll

// window.onscroll = function() {scrollNav()}

const nav = document.getElementById("main-nav")
const sticky = nav.offsetTop

function scrollNav() {
  if (window.scrollY >= sticky ) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}

//? Title typing effect

// consoleText(['a Fashion Designer'],
// )

// const i = 0
// const text = 'I\'m a Full-Stack Web Developer and a Fashion Designer'
// const speed = 50

// function typingtext() {
//   if (i < text.length) {
//     document.getElementById("text-type").innerHTML += text.charAt(i)
//     i++
//     setTimeout(typingtext, speed)
//   }
// }

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