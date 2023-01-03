var defaultQuestions = ["Q: Who invented the World Wide Web?","Q: In bingo, what number is represented by “two little ducks”?","Q: In a search bar what does the www mean?","Q: In which European city would you find the airport “Orly”","Q: Who created GNU/Linux?"]
var defaultAnswers = ["A: Tim Berners Lee","A:22","A: World Wide Web","A: Paris","A: Linus Torvalds"];
var triviaQuestions = JSON.parse(localStorage.getItem('questions'));
var triviaAnswers = JSON.parse(localStorage.getItem('answers'));
if (!triviaQuestions) {
    localStorage.setItem('questions', JSON.stringify(defaultQuestions))
}
if (!triviaAnswers) {
    localStorage.setItem('answers', JSON.stringify(defaultAnswers))
}

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
