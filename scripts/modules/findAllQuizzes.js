let findAllQuizzes = (quiz, view, pageTitle, req, res) => {
    quiz.find((err, quizList) => {
        if (err) {
            console.error(err);
        } else {
            res.render(view, {
                pageTitle: pageTitle,
                quizzes: quizList
            });
        }
    })
};

module.exports = findAllQuizzes;