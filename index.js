const quizQuestions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<scripting>",
    b: "<script>",
    c: "<js>",
    d: "<javascript>",
    correct: "b",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "x",
    b: "-",
    c: "*",
    d: "=",
    correct: "d",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quizContainer = document.querySelector(".quiz-container");
const question = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const option_a = document.getElementById("option_a");
const option_b = document.getElementById("option_b");
const option_c = document.getElementById("option_c");
const option_d = document.getElementById("option_d");
const submitBtn = document.getElementById("submit");
const progress = document.querySelector(".progress");

let currentQuiz = 0;
let score = 0;

window.addEventListener("load", loadQuiz);

function loadQuiz() {
  answers.forEach((answer) => (answer.checked = false));

  progress.innerHTML = `
  Question ${currentQuiz + 1} of ${quizQuestions.length}
  `;

  const currentQuizQuestion = quizQuestions[currentQuiz];
  question.innerText = currentQuizQuestion.question;
  option_a.innerText = currentQuizQuestion.a;
  option_b.innerText = currentQuizQuestion.b;
  option_c.innerText = currentQuizQuestion.c;
  option_d.innerText = currentQuizQuestion.d;
}

submitBtn.addEventListener("click", () => {
  let answer;
  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  if (answer) {
    if (answer === quizQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    progress.innerHTML = `
    Question ${currentQuiz + 1} of ${quizQuestions.length}
    `;
    if (currentQuiz < quizQuestions.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `
               <div class="result">
                <h2>You answered ${score}/${quizQuestions.length} question correctly</h2>

                <button onclick="location.reload()" class="submit">Reload</button>
                </div>
            `;
    }
  }
});
