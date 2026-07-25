const fs = require('fs');
const content = fs.readFileSync('question.md', 'utf-8');
const lines = content.replace(/\r\n/g, '\n').split('\n');

const questions = [];
let currentLines = [];
let options = {};

for (const line of lines) {
    const s = line.trim();
    
    if (!s) {
        if (currentLines.length > 0) currentLines.push(line);
        continue;
    }
    
    const optionMatch = s.match(/^([A-E])\s*[.)]\s*(.*)/i);
    const answerMatch = s.match(/^(?:Đáp án:\s*)?([A-E]{1,5})(?:\s*\.?)?(?:\s*\((.*)\))?$/i);
    
    if (optionMatch) {
        currentLines.push(line);
        options[optionMatch[1].toUpperCase()] = optionMatch[2].trim();
    } else if (answerMatch && Object.keys(options).length > 0) {
        currentLines.push(line);
        
        const optsStr = Object.values(options).map(o => o.toLowerCase()).join('|');
        questions.push({
            rawLines: [...currentLines],
            optionsKey: optsStr,
            questionText: currentLines.find(l => l.trim() !== '') || ""
        });
        currentLines = [];
        options = {};
    } else {
        if (Object.keys(options).length > 0) {
            questions.push({
                rawLines: [...currentLines],
                optionsKey: Math.random().toString(),
                questionText: currentLines.find(l => l.trim() !== '') || ""
            });
            currentLines = [line];
            options = {};
        } else {
            currentLines.push(line);
        }
    }
}

if (currentLines.some(l => l.trim() !== '')) {
    questions.push({
        rawLines: [...currentLines],
        optionsKey: Math.random().toString(),
        questionText: currentLines.find(l => l.trim() !== '') || ""
    });
}

const groups = {};
for (const q of questions) {
    if (!groups[q.optionsKey]) {
        groups[q.optionsKey] = [];
    }
    groups[q.optionsKey].push(q);
}

const groupArr = Object.values(groups);
groupArr.sort((a, b) => b.length - a.length);

for (const g of groupArr) {
    g.sort((a, b) => a.questionText.localeCompare(b.questionText));
}

const sortedQuestions = groupArr.flat();

const newContent = sortedQuestions.map(q => q.rawLines.join('\n').trim()).filter(s => s).join('\n\n\n') + '\n';

fs.writeFileSync('question.md', newContent, 'utf-8');
console.log(`Reordered ${sortedQuestions.length} blocks in question.md`);
