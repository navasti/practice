const box = document.querySelector('.typing')
const text = [
  "Wow! I am glad that you're here. ^I really like to talk to people! ",
  "Let me introduce myself. ^My name is Marcus and i'm a happy robot. ",
  "How about you? ^Tell me something about yourself. "
]
let wordIndex = 0
let textIndex = 0
let oldTime = 0
const speed = 70
const breakTime = 1000
let activeDOMElement = box

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1)
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) return
      return setTimeout(() => {
        box.textContent = ""
        textIndex++
        wordIndex = 0
        requestAnimationFrame(typing)
      }, breakTime)
    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement('p')
      box.appendChild(p)
      activeDOMElement = p
    }

    if (!(letter === "^")) {
      activeDOMElement.textContent += letter
    }

    oldTime = newTime
    wordIndex++
  }
  requestAnimationFrame(typing)
}

typing()
