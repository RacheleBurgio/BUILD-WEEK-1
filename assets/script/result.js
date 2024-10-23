const reverse = function () {
  let circle = document.getElementById('time_wrapper')
  let i = 60
  setInterval(function () {
    if (i > 0) {
      circle.classList.add('color')
    }
    i--
  }, 1000)
}
reverse()

const reverse = function () {
  let circle = document.getElementById("time_wrapper");
  let i = 60;
  setInterval(function () {
    if (i > 0) {
      circle.classList.add("color");
    }
    i--;
  }, 1000);
};
reverse();

function calculatePercentage(correct, total) {
  return (correct / total) * 100;
}

function getResultMessage(percentage) {
  if (percentage >= 50) {
    return "Congratulations, you passed the exam. We'll send you the certificate in few minutes. Check your email (including promotions/spam folder).";
  } else {
    return "Unfortunately, you didn't pass the exam. Try again.";
  }
}

window.onload = function () {
  if (typeof Chart === 'undefined') {
    console.error('Chart.js non è stato caricato correttamente.');
    return;
  }

  const canvas = document.getElementById('myDoughnutChart');
  canvas.width = 250;
  canvas.height = 250;

  let ctx = canvas.getContext('2d');
  let correctAnswers = 4;
  let totalQuestions = 6;
  let wrongAnswers = totalQuestions - correctAnswers;
  let correctPercentage = calculatePercentage(correctAnswers, totalQuestions).toFixed(1);
  let wrongPercentage = (100 - correctPercentage).toFixed(1);

  document.getElementById("correctPercentage").textContent = correctPercentage + "%";
  document.getElementById("correctCount").textContent = correctAnswers + "/" + totalQuestions + " questions";
  document.getElementById("wrongPercentage").textContent = wrongPercentage + "%";
  document.getElementById("wrongCount").textContent = wrongAnswers + "/" + totalQuestions + " questions";

  let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct answers', 'Wrong answers'],
      datasets: [{
        data: [correctAnswers, wrongAnswers],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 0.7)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: true
        },
        beforeDraw: function (chart) {
          let width = chart.width,
              height = chart.height,
              ctx = chart.ctx;
          ctx.restore();
          let fontSize = (height / 100).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          let text = getResultMessage(correctPercentage),
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
    }
  });
};
