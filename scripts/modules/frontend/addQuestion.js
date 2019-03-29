import {assignNameAttribute} from './assignNameAttribute';

export let addQuestion = () => {
    let form = document.querySelector('.quiz-form');
    let formGroup = document.querySelectorAll('.form-group');
    let lastFormGroup = formGroup[formGroup.length - 1];

    // Create form group and set attributes
    let newFormGroup = document.createElement('div');
    newFormGroup.setAttribute('class', 'form-group');

    // Create input group
    let newInputGroup = document.createElement('div');
    newInputGroup.setAttribute('class', 'input-group question-group');

    // Create question labels and inputs and set attributes
    let questionLabel = document.createElement('label');
    let questionInput = document.createElement('input');

    // Create add answer button
    let answerButton = document.createElement('button');
    answerButton.setAttribute('name', 'add-answer-button');
    answerButton.setAttribute('type', 'button');
    answerButton.setAttribute('class', 'btn btn-secondary');

    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('name', 'delete-question');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'btn btn-secondary delete-button');

    // Create button and label text
    let deleteButtonText = document.createTextNode('x');
    let addAnswerButtonText = document.createTextNode('Add answer');
    let questionLabelText = document.createTextNode('Enter question');

    // Append label text to label and button elements
    questionLabel.appendChild(questionLabelText);
    deleteButton.appendChild(deleteButtonText);
    answerButton.appendChild(addAnswerButtonText);

    // Build form group
    newInputGroup.appendChild(questionInput);
    newInputGroup.appendChild(deleteButton);
    newFormGroup.appendChild(questionLabel);
    newFormGroup.appendChild(newInputGroup);
    newFormGroup.appendChild(answerButton);

    // Append new form group to existing form
    form.insertBefore(newFormGroup, lastFormGroup.nextSibling);

    questionInput.setAttribute('class', 'form-control question-input');
    questionInput.setAttribute('name', assignNameAttribute(questionInput));
    questionInput.setAttribute('id', assignNameAttribute(questionInput));
    questionInput.required = true;
    questionLabel.setAttribute('for', assignNameAttribute(questionInput));
};