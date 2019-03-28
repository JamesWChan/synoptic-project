export let deleteFormGroup = (target) => {
    let parent = target.parentNode;
    let grandparent = parent.parentNode;
    let greatGrandparent = grandparent.parentNode;

    if(target.name === 'delete-question'){
        greatGrandparent.removeChild(grandparent);
    }
    else{
        grandparent.removeChild(parent.previousElementSibling);
        grandparent.removeChild(parent);
    }
};