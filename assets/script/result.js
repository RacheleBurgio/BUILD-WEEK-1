const timer = function () {
  let timer = document.getElementById("timer");
  let i = 60;

  setInterval(function () {
    if (i > 0) {
      timer.innerHTML = i;
    } else if (i === 0) {
      timer.innerHTML = "0";
    } else {
      clearInterval(countdown);
    }
    i--;
  }, 1000);
};

timer();

const reverse = function () {
  let circle = document.getElementById("time_wrapper");
  let i = 60;
  setInterval(function () {
    if (i > 0) {
      circle.classList.add("color");
    } else {
    }
    i--;
  }, 1000);
};
reverse();
window.onload = function() { 
    
  if (typeof Chart === 'undefined') {
      console.error('Chart.js non è stato caricato correttamente.');
      return;
  }

  const canvas = document.getElementById('myDoughnutChart');
  canvas.width = 250;  
  canvas.height = 250; 

  
  let ctx = canvas.getContext('2d');

  
  let myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Risposte corrette', 'Non risposte'],
          datasets: [{
              data: [60, 40],  
              backgroundColor: [
                  'rgba(75, 192, 192, 1)',  
                  'rgba(200, 200, 200, 0.2)'  
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
              }
          }
      }
  });
};