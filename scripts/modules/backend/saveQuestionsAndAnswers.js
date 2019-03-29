let saveQuestionsAndAnswers = (obj, questionsArray, answersArray, correctAnswers) => {
    Object.keys(obj).forEach((key) => {
        if(key.includes('question') && !key.includes('Answer')){
            questionsArray.push(obj[key]);
        }
        else if (key.includes('Answer')){
            answersArray.push(obj[key]);
            correctAnswers.push(obj[key][0]);
        }
    });
};

module.exports = saveQuestionsAndAnswers;