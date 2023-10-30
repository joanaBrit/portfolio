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

const text = 'I\'m a Full-Stack Web Developer and a Fashion Designer'

let index = 0
let type = document.getElementById('text-type')
let intervalID

function writeText() {
  type.innerHTML = text.slice(0, index)
  index++
  if (index > text.length) {
    clearInterval(intervalID)
  }
}
intervalID = setInterval(writeText, 100)