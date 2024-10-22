// TIMER

const timer = function () {
  const timerElement = document.getElementById('timer')
  let i = 60

  const countdown = setInterval(function () {
    if (i > 0) {
      timerElement.innerHTML = i

      // Change color based on the remaining time
      if (i > 30) {
        timerElement.style.color = 'green' // More than 30 seconds
      } else if (i > 10) {
        timerElement.style.color = 'yellow' // Between 10 and 30 seconds
      } else {
        timerElement.style.color = 'red' // 10 seconds or less
      }
    } else {
      timerElement.innerHTML = '0'
      clearInterval(countdown)
    }
    i--
  }, 1000)
}

timer()

const reverse = function () {
  const circle = document.getElementById('time_wrapper')
  let i = 60

  const reverseCountdown = setInterval(function () {
    if (i > 0) {
      circle.classList.add('color') // Add your desired class here
    } else {
      clearInterval(reverseCountdown)
    }
    i--
  }, 1000)
}

reverse()
