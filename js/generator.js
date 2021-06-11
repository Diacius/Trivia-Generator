var triviaQuestions = [
    "Q: Who invented the World Wide Web?",
    "Q: In bingo, what number is represented by “two little ducks”?",
    "Q: In a search bar what does the www mean?",
    "Q: In which European city would you find the airport “Orly”",
    "Q: Who created GNU/Linux?"
];
var triviaAnswers = [
    "A: Tim Berners Lee",
    "A:22",
    "A: World Wide Web",
    "A: Paris",
    "A: Linus Torvalds"
];
function getTrivia() {
    questionOutput = document.getElementById('questionOutput');
    currentTrivia = Math.floor(Math.random() * triviaQuestions.length);
    questionOutput.innerText = triviaQuestions[currentTrivia];
    answerOutput.innerText = "Press reveal again.";
}
function revealAnswer() {
    answerOutput = document.getElementById('answerOutput');
    answerOutput.innerText = triviaAnswers[currentTrivia]
    
}
