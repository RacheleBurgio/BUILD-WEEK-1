document.querySelectorAll('.star').forEach((star, index, starsArray) => {
  star.addEventListener('click', () => {
    for (let i = index; i < starsArray.length; i++) {
      starsArray[i].querySelector('path').setAttribute('fill', '#000000') // Cambia il colore a nero
    }
  })
})

const stars = document.querySelectorAll('.star')

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      const path = stars[i].querySelector('path')
      path.setAttribute('fill', '#00FFFF')
    }
  })
})

const inputComment = document.getElementById('InputComment')
const buttonForm = document.getElementById('buttonForm')

const buttonClick = function () {
  if (inputComment.value.trim() !== '') {
    window.location.href = 'https://epicode.com/it/chi-siamo/'
  } else {
    alert('Devi scrivere un comment!!')
  }
}

const checkInput = function () {
  // Controlla se l'input non è vuoto
  if (inputComment.value.trim() !== '') {
    buttonForm.disabled = false
  } else {
    buttonForm.disabled = false
    alert('Devi scrivere un comment!!')
  }
}

inputComment.addEventListener('input', checkInput)

buttonForm.addEventListener('click', buttonClick)
