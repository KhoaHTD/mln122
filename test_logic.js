// Simulating the logic
const questionsData = [
    { id: 1, text: "Q1", options: { A: "1", B: "2" }, correctAnswer: "B" },
    { id: 2, text: "Q2", options: { A: "3", B: "4" }, correctAnswer: "B" }
];

let userAnswers = {};
let resultBoxDisplay = 'none';

function showResult(userAnsStr, questionObj) {
    const correctSorted = questionObj.correctAnswer.split('').sort().join('').toUpperCase();
    const userSorted = userAnsStr.toUpperCase();
    const isCorrect = userSorted === correctSorted;
    resultBoxDisplay = 'block';
    console.log(`Showing result for Q${questionObj.id}. userAns: ${userAnsStr}, isCorrect: ${isCorrect}`);
}

function loadQuestion(index) {
    const q = questionsData[index];
    resultBoxDisplay = 'none';
    
    if (userAnswers[index]) {
        const savedAnswer = userAnswers[index];
        const numAnswersRequired = q.correctAnswer.length;
        if (savedAnswer.length >= numAnswersRequired) {
            showResult(savedAnswer, q);
        }
    }
}

// User answers Q1
userAnswers[0] = "A"; // Wrong answer
console.log("User answered A");
loadQuestion(0);
console.log("Result Box:", resultBoxDisplay);

// User goes to Q2
console.log("Next Question");
loadQuestion(1);
console.log("Result Box:", resultBoxDisplay);

// User goes back to Q1
console.log("Prev Question");
loadQuestion(0);
console.log("Result Box:", resultBoxDisplay);
