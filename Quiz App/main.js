const questions = [
  {
    question: 'How many time zones are there in Russia?',
    answers: [
      { text: '11', correct: true },
      { text: '4', correct: false },
      { text: '7', correct: false },
      { text: '17', correct: false },
    ],
  },
  {
    question: 'What is the national animal of Australia?',
    answers: [
      { text: 'Koala', correct: false },
      { text: 'Dingo', correct: false },
      { text: 'Red Kangaroo', correct: true },
      { text: 'Emu', correct: false },
    ],
  },
  {
    question: 'What is the smallest country in the world?',
    answers: [
      { text: 'San Marinoa', correct: false },
      { text: 'Liechtenstein', correct: false },
      { text: 'Tuvalu', correct: false },
      { text: 'The Vatican', correct: true },
    ],
  },
  {
    question:
      'Which language has the most words (according to dictionary entries)?',
    answers: [
      { text: 'Spanish', correct: false },
      { text: 'English', correct: true },
      { text: 'Mandarin Chinese', correct: false },
      { text: 'Hindi', correct: false },
    ],
  },
];
const questionElement = document.getElementById('questions');
const answerBtns = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = 'NEXT';
  resetState();
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = 'none';
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectBtn.classList.add('correct');
  } else {
    selectBtn.classList.add('incorrect');
  }
}

startQuiz();
