const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
<<<<<<< Updated upstream
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't &#039;t get modified?",
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
=======
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
>>>>>>> Stashed changes
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timerInterval;
let timeLeft = 60;

const load = () => {
  window.onload = function () {
<<<<<<< Updated upstream
    const questionTitle = document.querySelector('h1')
    const buttons = document.querySelectorAll('#bottoni button')
    const footerText = document.querySelector('footer h4')
    const timerElement = document.getElementById('seconds')
    const circle = document.querySelector('.progress-ring-circle')

=======
    const questionTitle = document.querySelector("h1");
    const buttons = document.querySelectorAll("#bottoni button");
    const footerText = document.querySelector("footer h4");
    const timerElement = document.getElementById("timer");
    const timerBack = document.getElementById("second_time_wrapper");
>>>>>>> Stashed changes
    const shuffleAnswers = (question) => {
      return question.incorrect_answers.concat(question.correct_answer).sort(() => Math.random() - 0.5);
    };

    const loadQuestion = (index) => {
      const question = questions[index];
      const shuffledAnswers = shuffleAnswers(question);

<<<<<<< Updated upstream
      questionTitle.textContent = question.question
      footerText.innerHTML =
        'QUESTION ' +
        (index + 1) +
        ' <strong>/ ' +
        questions.length +
        '</strong>'
=======
      questionTitle.textContent = "Domanda " + (index + 1) + ": " + question.question;
      footerText.innerHTML = "QUESTION " + (index + 1) + " <strong>/ " + questions.length + "</strong>";
>>>>>>> Stashed changes

      buttons.forEach((button, i) => {
        button.style.visibility = "visible";
        button.textContent = shuffledAnswers[i];
        if (button.textContent === "") {
          button.style.visibility = "hidden";
        }
        button.onclick = () => {
          handleAnswerSelection(shuffledAnswers[i] === question.correct_answer);
        };
      });

<<<<<<< Updated upstream
      resetTimer()
    }
    const loadNextQuestion = () => {
      if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex)
      } else {
        showFinalScore()
      }
    }
=======
      resetTimer();
    };

>>>>>>> Stashed changes
    const handleAnswerSelection = (isCorrect) => {
      if (isCorrect) {
        correctAnswers++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
      } else {
        showFinalScore();
      }
    };

    const showFinalScore = () => {
<<<<<<< Updated upstream
      clearInterval(timerInterval)
      const totalQuestions = questions.length
      const scorePercentage = (correctAnswers / totalQuestions) * 100

      localStorage.setItem('correctAnswers', correctAnswers)
      localStorage.setItem('totalQuestions', totalQuestions)
      localStorage.setItem('scorePercentage', scorePercentage.toFixed(2))

      questionTitle.textContent = 'Quiz completato!'
      footerText.innerHTML =
        'Hai risposto correttamente a ' +
        correctAnswers +
        ' su ' +
        totalQuestions +
        ' domande.'
=======
      clearInterval(timerInterval);
      questionTitle.textContent = "Quiz completato!";
      footerText.innerHTML = "Hai risposto correttamente a " + correctAnswers + " su " + questions.length + " domande.";
>>>>>>> Stashed changes

      buttons.forEach((button) => {
        button.style.display = "none";
      });

<<<<<<< Updated upstream
      const nextButton = document.getElementById('nextButton')
      nextButton.style.display = 'block'
      nextButton.addEventListener('click', () => {
        window.location.href = 'resultpage.html'
      })
    }
=======
      nextButton.style.display = "block";
      nextButton.addEventListener("click", () => {
        window.location.href = "resultpage.html";
      });
    };
    const circonferenza = 2 * Math.PI * 3;
    const timerOffset = function (percentuale) {
      const offSet = circonferenza - (percentuale / 100) * circonferenza;
      timerBack.style.strokeDashoffset = offSet;
    };
>>>>>>> Stashed changes

    const radius = circle.r.baseVal.value
    const circonferenza = 2 * Math.PI * radius
    circle.style.strokeDasharray = `${circonferenza} ${circonferenza}`
    circle.style.strokeDashoffset = `${circonferenza}`

    function setProgress(percent) {
      const offset = circonferenza - (percent / 100) * circonferenza
      circle.style.strokeDashoffset = offset
    }

    const resetTimer = () => {
<<<<<<< Updated upstream
      clearInterval(timerInterval)
      timeLeft = 60
      const totalTime = timeLeft
      timerElement.innerHTML = timeLeft
      setProgress(100)

      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--
          timerElement.innerHTML = timeLeft

          const progressPercentage = (timeLeft / totalTime) * 100
          setProgress(progressPercentage)
=======
      clearInterval(timerInterval);
      timeLeft = 60;
      timerElement.innerHTML = timeLeft;
      timerOffset(100);

      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          timerElement.innerHTML = timeLeft;
>>>>>>> Stashed changes
        } else {
          clearInterval(timerInterval);
          alert("Tempo scaduto! Passiamo alla prossima domanda.");
          currentQuestionIndex++;
        }
        loadNextQuestion();
      }, 1000);
    };

    loadQuestion(currentQuestionIndex);
  };
};

<<<<<<< Updated upstream
load()
=======
const loadNextQuestion = () => {
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    showFinalScore();
  }
};

load();
>>>>>>> Stashed changes
