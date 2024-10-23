function getResultMessage(percentage) {
  if (percentage > 50) {
    return "Congratulations, you passed the exam. We'll send you the certificate in a few minutes. Check your email (including promotions/spam folder)."
  } else if (percentage < 50) {
    return "Unfortunately, you didn't pass the exam. Try again."
  } else {
    return 'You scored exactly 50%. Please review the material and try again.'
  }
}

window.onload = function () {
  if (typeof Chart === 'undefined') {
    console.error('Chart.js non è stato caricato correttamente.')
    return
  }

  const canvas = document.getElementById('myDoughnutChart')
  canvas.width = 250
  canvas.height = 250

  let ctx = canvas.getContext('2d')

  let correctAnswers = 3
  let totalQuestions = 4
  let percentage = calculatePercentage(correctAnswers, totalQuestions)

  let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Risposte corrette', 'Non risposte'],
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(200, 200, 200, 0.2)',
          ],
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

          let text = getResultMessage(percentage),
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2

          ctx.fillText(text, textX, textY)
          ctx.save()
        },
      },
    },
  })
}

function calculatePercentage(correctAnswers, totalQuestions) {
  return (correctAnswers / totalQuestions) * 100
}
