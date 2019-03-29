let extractAnswers = (obj, submittedAnswers) => {
    Object.keys(obj).forEach((key) => {
        if(key.includes('Answer')){
            submittedAnswers.push(obj[key]);
        }
    })
};

module.exports = extractAnswers;