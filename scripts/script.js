import {addQuestion} from './modules/addQuestion';
import {deleteFormGroup} from './modules/deleteFormGroup';
import {addAnswer} from './modules/addAnswer';

let addQuestionButton = document.querySelector('#add-question-button');
let form = document.querySelector('form');

if(form !== null) {
    form.addEventListener('click', (e) => {
        let target = e.target;
        if (target.name === 'delete-question' || target.name === 'delete-answer') {
            deleteFormGroup(target);
        }
        if (target.name === 'add-answer-button') {
            addAnswer(target);
        }
    });
}

if(addQuestionButton !== null) {
    addQuestionButton.addEventListener('click', () => {
        addQuestion();
    });
}