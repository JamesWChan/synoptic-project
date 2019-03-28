const mongoose = require('mongoose');

let QuizSchema = {
    quizName: String,
    questions: Array,
    answers: Array,
    correctAnswers: Array
};

let Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;