const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const scriptStartRegex = /let currentIndex = 0;\s*let userAnswers = \{\};/;
const newScriptInit = `let currentIndex = parseInt(localStorage.getItem('quiz_currentIndex')) || 0;
        let userAnswers = JSON.parse(localStorage.getItem('quiz_userAnswers')) || {};

        function saveState() {
            localStorage.setItem('quiz_currentIndex', currentIndex);
            localStorage.setItem('quiz_userAnswers', JSON.stringify(userAnswers));
        }`;

html = html.replace(scriptStartRegex, newScriptInit);

// Inside initQuiz, saveState after load
const initQuizRegex = /function initQuiz\(\) \{[\s\S]*?updateNavButtons\(\);/;
const newInitQuiz = `function initQuiz() {
            totalQuestionsDisplay.textContent = questionsData.length;
            loadQuestion(currentIndex);
            updateNavButtons();
            saveState();`;
html = html.replace(initQuizRegex, newInitQuiz);

// Inside checkAnswer, saveState after update
const checkAnswerRegex = /userAnswers\[currentIndex\] = selectedStr;/;
const newCheckAnswer = `userAnswers[currentIndex] = selectedStr;\n            saveState();`;
html = html.replace(checkAnswerRegex, newCheckAnswer);

// Inside showAnswerImmediately, saveState after update
const spaceRegex = /userAnswers\[currentIndex\] = currentQ\.correctAnswer\.split\(''\)\.sort\(\)\.join\(''\);/;
const newSpace = `userAnswers[currentIndex] = currentQ.correctAnswer.split('').sort().join('');\n            saveState();`;
html = html.replace(spaceRegex, newSpace);

// Inside prevQuestion and nextQuestion, saveState
const prevNextRegex = /currentIndex--;\s*loadQuestion\(currentIndex\);\s*updateNavButtons\(\);/g;
html = html.replace(prevNextRegex, `currentIndex--;\n                loadQuestion(currentIndex);\n                updateNavButtons();\n                saveState();`);

const nextRegex = /currentIndex\+\+;\s*loadQuestion\(currentIndex\);\s*updateNavButtons\(\);/g;
html = html.replace(nextRegex, `currentIndex++;\n                loadQuestion(currentIndex);\n                updateNavButtons();\n                saveState();`);
                
// Inside jumpInput enter, saveState
const jumpRegex = /currentIndex = val - 1;\s*loadQuestion\(currentIndex\);\s*updateNavButtons\(\);\s*this\.blur\(\);/g;
html = html.replace(jumpRegex, `currentIndex = val - 1;\n                        loadQuestion(currentIndex);\n                        updateNavButtons();\n                        saveState();\n                        this.blur();`);

// Ensure showResult explicitly displays the correct answer even if correct
const showResultRegex = /if \(isCorrect\) \{[\s\S]*?resultStatus\.textContent = "✓ Correct!";[\s\S]*?correctAnswerDisplay\.innerHTML = "";\n            \} else \{/g;
const newShowResult = `if (isCorrect) {
                resultBox.className = 'result-container result-correct';
                resultStatus.textContent = "✓ Correct!";
                correctAnswerDisplay.innerHTML = \`Correct answer is: <strong>\${questionObj.correctAnswer}</strong>\`;
            } else {`;
html = html.replace(showResultRegex, newShowResult);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched index.html with localStorage and always-show-answer");
