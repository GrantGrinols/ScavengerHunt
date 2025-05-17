let questions = [];
let currentQuestion = 0;
let correctCount = 0;
let timerInterval;
let timeLeft;
let timeToPass = 60;

function generateQuestion() {
    const type = Math.random() < 0.5 ? 'add' : 'mult';
    let x, result, question;

    if (type === 'add') {
        x = Math.floor(Math.random() * 10) + 1;
        const add = Math.floor(Math.random() * 10) + 1;
        result = x + add;
        question = { text: `x + ${add} = ${result}`, answer: x };
    } else {
        x = Math.floor(Math.random() * 10) + 1;
        const mult = Math.floor(Math.random() * 9) + 1;
        result = x * mult;
        question = { text: `${mult}x = ${result}`, answer: x };
    }

    return question;
}

function startGame() {
    questions = Array.from({ length: 10 }, generateQuestion);
    currentQuestion = 0;
    correctCount = 0;
    timeLeft = timeToPass;

    document.getElementById("result").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";

    showQuestion();
    startTimer();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }

    document.getElementById("question").textContent =
        `Question ${currentQuestion + 1}: 
        ${questions[currentQuestion].text}`;
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        correctCount++;
        document.getElementById("feedback").textContent = "✅ Correct!";
    } else {
        document.getElementById("feedback").textContent = `❌ Wrong! Answer: ${correctAnswer}`;
    }

    currentQuestion++;
    setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        showQuestion();
    }, 800);
}

function startTimer() {
    document.getElementById("timer").textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";
    if (correctCount / 10 >= 0.7) {
        document.getElementById("result").textContent =
            `⏱ Time's up! You got ${correctCount} out of ${questions.length} correct. You have passed. Here is the key: 🔑 `;
        sendKey();
    } else {
        `⏱ Time's up! You got ${correctCount} out of ${questions.length} correct. You have failed. Please try again.`
    }
}
function sendKey() {
    document.getElementById("key2header").innerText = "Key 2 🔑";
    const token = document.querySelector('input[name="__RequestVerificationToken"]').value;

    fetch('?handler=CorrectMath', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'RequestVerificationToken': token

        },
        body: JSON.stringify({})
    })
        .then(response => response.json())
}