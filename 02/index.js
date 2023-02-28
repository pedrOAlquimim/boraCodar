let degreeButton = document.querySelector('.imgContainer button')
let change = false

degreeButton.addEventListener('click', () => {
  change = !change
  let iconImg = document.querySelector('.imgContainer button img')

  if (change == true) {
    iconImg.src = './assets/x.svg'
    iconImg.style.width = `16px`
    iconImg.style.color = `#271A45`
    document.querySelector('.couchImg').src = './assets/couchGif.gif'
  } else {
    iconImg.src = './assets/degree.svg'
    iconImg.style.width = `initial`
    document.querySelector('.couchImg').src = './assets/couch.png'
  }
})