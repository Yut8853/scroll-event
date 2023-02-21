const scrollContainer = document.querySelector('.scroll-container')

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 200) {
    scrollContainer.classList.remove('no-show')
  } else {
    scrollContainer.classList.add('no-show')
  }
})