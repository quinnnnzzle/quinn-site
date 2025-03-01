let currentQuestion = 0
let score = 0
let allQuestions = [

    {
        question: "What is the serving size of a 10 count package of Peeps?",
        choices: ["6 Chicks", "4 Chicks", "5 Chicks", "2 Chicks"],
        correctAnswer: 2
    },

    {
        question: "How many calories are in a serving of Peeps from a 10 count package?",
        choices: ["180", "80", "200", "140"],
        correctAnswer: 4
    },

    {
        question: "What monster is depicted on the packaging of the Marshmallow Monsters variant of Peeps?",
        choices: ["Medusa", "A skeleton", "Frankenstein's Monster", "Dracula"],
        correctAnswer: 3
    },

    {
        question: "What color are the Marshmallow Stockings variant of Peeps?",
        choices: ["Red", "Green", "Blue", "Yellow",],
        correctAnswer: 1
    }
]


function render(content) {
    document.getElementById('startGrid').innerHTML = content;
}

function loadAppStart() {
    render(appStart);
    currentQuestion = 0
    score = 0
    document.getElementById('start-button').addEventListener('click', loadAppQuiz);
}

function loadAppQuiz() {
    const {question, choices} = allQuestions[currentQuestion];
    render(appQuiz(question, choices, score));
}

function checkAnswer(selectedIndex) {
    const {correctAnswer} = allQuestions[currentQuestion];

    if (selectedIndex === correctAnswer - 1) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }

    currentQuestion++;
    if (currentQuestion < allQuestions.length) {
        loadAppQuiz();
    } else {
        loadAppEnd();
    }
}

function displayScore(score) {
    score = (score / 4) * 100; // Convert score to percentage
    if (score >= 75) {
        return `You scored ${score}%! Great Job!`;
    } else {
        return `You scored ${score}%! Maybe try again?`;
    }
}

function loadAppEnd() {
    render(appEnd(score));
    document.getElementById('retry-button').addEventListener('click', loadAppStart);
}

const appStart = `
<header>
        <div class="title">Peeps Quiz</div>
    </header>
    <main>
        <input name="start" type="button"
           value="Start" class="button" id="start-button">
    </main>
`

const appQuiz = (question, choices, score) => `
<header>
    <div class="title">Peeps Quiz</div>
    <div id="score-display">Score: ${score}/4</div>
</header>
<main>
    <section id="question">${question}</section>
    <div class="questions">
        ${choices.map((choice, index) => `
            <input 
                name="answer${index + 1}" onclick="checkAnswer(${index});"
                type="button" value="${choice}" class="button button${index + 1}">`).join('')}
    </div>
</main>

`

const appEnd = (score) => `
<header>
        <div class="title">Peeps Quiz</div>
    </header>
    <main>
        <section id ="totalScore">${displayScore(score)}</section>
        <input name="retry" onclick="loadAppStart();" type="button"
               value="Retry?" class="button" id="retry-button">
    </main>
`

loadAppStart()