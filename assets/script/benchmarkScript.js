// TIMER

const timer = function () {
  let timer = document.getElementById('timer')
  let i = 60

  setInterval(function () {
    if (i > 0) {
      timer.innerHTML = i
    } else if (i === 0) {
      timer.innerHTML = '0'
    } else {
      clearInterval(countdown)
    }
    i--
  }, 1000)
}

timer()

const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
]

let currentQuestionIndex = 0
let correctAnswers = 0

window.onload = function () {
  const questionTitle = document.querySelector('h1')
  const buttons = document.querySelectorAll('#bottoni button')
  const footerText = document.querySelector('footer h4')

  function shuffleAnswers(question) {
    return question.incorrect_answers
      .concat(question.correct_answer)
      .sort(function () {
        return Math.random() - 0.5
      })
  }

  function loadQuestion(index) {
    const question = questions[index]
    const shuffledAnswers = shuffleAnswers(question)

    questionTitle.textContent =
      'Domanda ' + (index + 1) + ': ' + question.question
    footerText.innerHTML =
      'QUESTION ' + (index + 1) + ' <strong>/ ' + questions.length + '</strong>'

    buttons.forEach(function (button, i) {
      button.textContent = shuffledAnswers[i]
      button.onclick = function () {
        handleAnswerSelection(shuffledAnswers[i] === question.correct_answer)
      }
    })
  }

  function handleAnswerSelection(isCorrect) {
    if (isCorrect) {
      correctAnswers++
    }

    currentQuestionIndex++

    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex)
    } else {
      showFinalScore()
    }
  }

  function showFinalScore() {
    questionTitle.textContent = 'Quiz completato!'
    footerText.innerHTML =
      'Hai risposto correttamente a ' +
      correctAnswers +
      ' su ' +
      questions.length +
      ' domande.'

    buttons.forEach(function (button) {
      button.style.display = 'none'
    })

    nextButton.style.display = 'block'
    nextButton.onclick = function () {
      
    }
    
  }

  loadQuestion(currentQuestionIndex)
}

