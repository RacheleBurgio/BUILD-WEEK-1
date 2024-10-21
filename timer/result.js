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
