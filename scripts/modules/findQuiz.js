let findQuiz = (quiz, selectedQuiz, view, req, res) => {
    quiz.find({ quizName: selectedQuiz}, (err, quiz) => {
        if(err){
            console.log(err);
        }
        else{
            res.render(view, {
                pageTitle: quiz[0].quizName,
                questions: quiz[0].questions,
                answers: quiz[0].answers
            });
        }
    });
};

module.exports = findQuiz;