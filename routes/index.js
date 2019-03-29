const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../config/auth');
const extractAnswers = require('../scripts/modules/backend/extractAnswers');
const saveQuestionsAndAnswers = require('../scripts/modules/backend/saveQuestionsAndAnswers');
const findAllQuizzes = require('../scripts/modules/backend/findAllQuizzes');
const findQuiz = require('../scripts/modules/backend/findQuiz');
const shuffleArray = require('../scripts/modules/backend/shuffleArray');
const Quiz = require('../models/Quiz');

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/dashboard', (req, res) => {
    let name = req.isAuthenticated() ? req.user.name : 'guest';
    res.render('dashboard',{
        name: name
    });
});

router.get('/choose-quiz', (req, res) => {
    findAllQuizzes(Quiz, 'quizSelection', 'Select a quiz', req, res);
});

router.get('/create-quiz', ensureAuthenticated, (req, res) => {
    res.render('createQuizForm', {
        pageTitle: 'Create Quiz',
    });
});

router.get('/edit-selection', ensureAuthenticated, (req, res) => {
    findAllQuizzes(Quiz, 'editSelection', 'Select quiz to edit', req, res);
});

router.get('/delete-selection', ensureAuthenticated, (req, res) => {
    findAllQuizzes(Quiz, 'deleteSelection', 'Select quiz to delete', req, res);
});

router.post('/delete-quiz', ensureAuthenticated, (req, res) => {
    let selectedQuiz = req.body.quizzes;

    Quiz.deleteOne({quizName: selectedQuiz}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Quiz deleted');
        }
    });

    res.redirect('/dashboard');
});

router.post('/edit-quiz', ensureAuthenticated, (req, res) => {
    let selectedQuiz = req.body.quizzes;
    findQuiz(Quiz, selectedQuiz, 'editQuizForm', req, res);
});

router.post('/save-quiz', ensureAuthenticated, (req, res) => {
    let quiz = req.body;
    let quizName = req.body.quizName;
    let questionsArray = [];
    let answersArray = [];
    let correctAnswers = [];
    let errors = [];

    saveQuestionsAndAnswers(quiz, questionsArray, answersArray, correctAnswers);

    Quiz.findOne({quizName: quizName}, (err, quiz) => {
        if(quiz){
            errors.push({ msg: 'Quiz already exists! Please enter a unique name.' });
            res.render('createQuizForm', {
                pageTitle: 'Create Quiz',
                errors,
            });
        }
        else{
            let newQuiz = new Quiz({
                quizName: quizName,
                questions: questionsArray,
                answers: answersArray,
                correctAnswers: correctAnswers
            });

            newQuiz.save((err, quiz) => {
                if(err){
                    console.log('There was an error');
                }
                else{
                    console.log('Entry saved');
                    res.redirect('/dashboard');
                }
            });
        }
    });
});

router.post('/save-quiz-changes', ensureAuthenticated, (req, res) => {
    let quiz = req.body;
    console.log(quiz);
    let selectedQuiz = quiz.quizName;
    let questionsArray = [];
    let answersArray = [];
    let correctAnswersArray = [];

    saveQuestionsAndAnswers(quiz, questionsArray, answersArray, correctAnswersArray);

    Quiz.update({quizName: selectedQuiz}, {$set: {
        questions: questionsArray,
        answers: answersArray,
        correctAnswers: correctAnswersArray
    }},
        {
            upsert: true
        }, (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('Record updated');
            }
    });

    res.redirect('/dashboard');
});

router.post('/play-quiz', (req, res) => {
    let selectedQuiz = req.body.quizzes;

    Quiz.find({ quizName: selectedQuiz}, (err, quiz) => {
        if(err){
            console.log(err);
        }
        else{
            let answerArrays = quiz[0].answers;
            let shuffledAnswerArrays = [];

            answerArrays.forEach((answerArray) => {
                shuffledAnswerArrays.push(shuffleArray(answerArray));
            });

            res.render('quiz', {
                pageTitle: quiz[0].quizName,
                questions: quiz[0].questions,
                answers: quiz[0].answers
            });
        }
    });
});

router.post('/results', (req, res) => {
    let quiz = req.body;
    let quizTaken = quiz.quizName;
    let submittedAnswers = [];
    let correctAnswerCount = 0;

    extractAnswers(quiz, submittedAnswers);

    Quiz.find({quizName: quizTaken}, (err, quiz) => {
        if(err){
            console.log(err);
        }
        else{
            res.render('results', {
                pageTitle: 'Results',
                quizQuestions: quiz[0].questions,
                submittedAnswers: submittedAnswers,
                correctAnswers: quiz[0].correctAnswers,
                correctAnswerCount: correctAnswerCount
            });
        }
    })
});

module.exports = router;