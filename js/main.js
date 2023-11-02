//? Navbar scroll

// window.onscroll = function() {scrollNav()}

const nav = document.getElementById("main-nav")
const sticky = nav.offsetTop

function scrollNav() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}


// //? Button redirect

// const linkBtn = document.getElementById("link-button")
// const gitBtn = document.getElementById("git-btn")

// linkBtn.addEventListener("click", function () {
//   window.location.href = ""
// })


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