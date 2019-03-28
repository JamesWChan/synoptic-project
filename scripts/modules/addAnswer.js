import {assignNameAttribute} from './assignNameAttribute';

export let addAnswer = (target) => {
    let previousSibling = target.previousElementSibling;

    // Create input group
    let newInputGroup = document.createElement('div');
    newInputGroup.setAttribute('class', 'input-group answer-group');

    // Create answer labels and inputs and set attributes
    let answerLabel = document.createElement('label');
    let answerInput = document.createElement('input');

    // Create delete button
    let deleteButton = document.createElement('button');

    // Create label text and append to answer label
    let answerLabelText = document.createTextNode('Enter answer');
    if((previousSibling.className === 'input-group question-group')){
        answerLabelText = document.createTextNode('Enter answer (please enter correct answer first)');
    }
    let deleteButtonText = document.createTextNode('x');
    answerLabel.appendChild(answerLabelText);
    deleteButton.appendChild(deleteButtonText);

    newInputGroup.appendChild(answerInput);
    newInputGroup.appendChild(deleteButton);

    // Insert answer button into DOM
    previousSibling.insertAdjacentElement("afterend", newInputGroup);
    previousSibling.insertAdjacentElement("afterend", answerLabel);

    // Set button/label attributes
    answerInput.setAttribute('class', 'form-control answer-input');
    answerInput.setAttribute('name', assignNameAttribute(answerInput));
    answerInput.setAttribute('id', assignNameAttribute(answerInput));
    answerLabel.setAttribute('for', assignNameAttribute(answerInput));
    deleteButton.setAttribute('name', 'delete-answer');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'btn btn-secondary delete-button');
};