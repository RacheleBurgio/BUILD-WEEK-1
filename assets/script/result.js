function calculatePercentage(correct, total) {
  return (correct / total) * 100
}

function getResultMessage(percentage) {
  if (percentage >= 50) {
    return "Congratulations, you passed the exam. We'll send you the certificate in a few minutes. Check your email (including promotions/spam folder)."
  } else {
    return "Unfortunately, you didn't pass the exam. Try again."
  }
}

function getCertificateMessage(percentage) {
  if (percentage >= 50) {
    return "We'll send you the certificate soon. Check your email!"
  } else {
    return 'Try again next time!'
  }
}

window.onload = function () {
  if (typeof Chart === 'undefined') {
    console.error('Chart.js was not loaded correctly.')
    return
  }

  let correctAnswers = localStorage.getItem('correctAnswers')
  let totalQuestions = localStorage.getItem('totalQuestions')

  if (!correctAnswers || !totalQuestions) {
    correctAnswers = 0
    totalQuestions = 1
  } else {
    correctAnswers = Number(correctAnswers)
    totalQuestions = Number(totalQuestions)
  }

  let wrongAnswers = totalQuestions - correctAnswers
  let correctPercentage = calculatePercentage(
    correctAnswers,
    totalQuestions
  ).toFixed(1)
  let wrongPercentage = (100 - correctPercentage).toFixed(1)

  document.getElementById('correctPercentage').textContent =
    correctPercentage + '%'
  document.getElementById('correctCount').textContent =
    correctAnswers + '/' + totalQuestions + ' questions'
  document.getElementById('wrongPercentage').textContent = wrongPercentage + '%'
  document.getElementById('wrongCount').textContent =
    wrongAnswers + '/' + totalQuestions + ' questions'

  const canvas = document.getElementById('myDoughnutChart')
  canvas.width = 250
  canvas.height = 250
  let ctx = canvas.getContext('2d')

  let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct answers', 'Wrong answers'],
      datasets: [
        {
          data: [correctAnswers, wrongAnswers],
          backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 0.7)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: true,
        },
        beforeDraw: function (chart) {
          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx
          ctx.restore()
          let fontSize = (height / 100).toFixed(2)
          ctx.font = fontSize + 'em sans-serif'
          ctx.textBaseline = 'middle'

          let mainText = getResultMessage(correctPercentage),
            mainTextX = Math.round(
              (width - ctx.measureText(mainText).width) / 2
            ),
            mainTextY = height / 2 - 20

          let subText = getCertificateMessage(correctPercentage),
            subTextX = Math.round((width - ctx.measureText(subText).width) / 2),
            subTextY = height / 2 + 10

          ctx.fillStyle = 'white'
          ctx.fillText(mainText, mainTextX, mainTextY)
          ctx.font = (height / 200).toFixed(2) + 'em Arial'
          ctx.fillText(subText, subTextX, subTextY)
          ctx.save()
        },
      },
    },
  })
}
