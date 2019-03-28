export let assignNameAttribute = (domElement) => {
    let formGroups = Array.from(document.querySelectorAll('.form-group'));
    let domElementFG = domElement.parentElement.parentElement;
    let domElementFGIndex = formGroups.indexOf(domElementFG);

    if(domElement.getAttribute('class').includes('question-input')) {
        return `question${domElementFGIndex}`;
    }

    return `question${domElementFGIndex}Answers[]`;
};