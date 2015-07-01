var checkboxes = document.getElementsByName('days');

function textFieldValid() {
    var textFieldsReq = document.getElementsByName('textFieldReq');
    for (var i = 0; i < textFieldsReq.length; i++) {
        if (!textFieldsReq[i].value) {
            alert('You need to fill in the required* text field!');
            textFieldsReq[i].focus();
            return false;
        }
    }
    //if valid return true
    return true;
};


function checkboxesValid() {
    //create local variables
    var valid = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            valid = true;
            break;
        }
    }
    if (!valid) {
        alert('You need to select at least one day!');
        checkboxes[0].focus();
        return false;
    }
    //if valid return true
    return valid;
}

/* function lodgeValid() {
    var lodging = document.getElementsByName('lodge'),
        valid = false;
    for (var i = 0; i < lodging.length; i++) {
        if (lodging[i].checked) {
            valid = true;
            break;
        }
    }
    if (!valid) {
        alert('You need to select at least one option!');
        lodging[0].focus();
        return false;
    }
    //if valid return true
    return valid;
} */


function validate(textFieldsReq) {
    //check whether all the tests are turnig true
    return textFieldValid() && checkboxesValid();
};

function selectAll( form ){
    for( var i=0,n=checkboxes.length;i<n;i++ ){
        checkboxes[i].checked = form.checked;
    }    
    return true;
};








