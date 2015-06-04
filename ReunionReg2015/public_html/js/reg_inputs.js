//Check to make sure that all required field are filled out
//ref http://www.quirksmode.org/dom/error.html

//var streetAddress        = document.getElementsByName.textFieldsReq[];
//var cityCode             = document.getElementsByName.textFieldsReq[];
//var stateCode            = document.getElementsByName.textFieldsReq[];
//var zipCode              = document.getElementsByName.textFieldsReq[];
//var phoneNumber          = document.getElementsByName.textFieldsReq[];
//var emailAddress         = document.getElementsByName.textFieldsReq[];
//var emergencyContactName = document.getElementsByName.textFieldsReq[];
//var emergencyContactPhone= document.getElementsByName.textFieldsReq[];   
//var mondayCheck          = document.getElementsByName.textFieldsReq[];
//var tuesdayCheck         = document.getElementsByName.textFieldsReq[];
//var wednesdayCheck       = document.getElementsByName.textFieldsReq[];
//var thursdayCheck        = document.getElementsByName.textFieldsReq[];
//var fridayCheck          = document.getElementsByName.textFieldsReq[];
//var saturdayCheck        = document.getElementsByName.textFieldsReq[];
//var sundayCheck          = document.getElementsByName.textFieldsReq[];
//var beforeNoonMonYes     = document.getElementsByName.textFieldsReq[]; 
//var beforeNoonMonNo      = document.getElementsByName.textFieldsReq[]; 
//var eatMealsReunion      = document.getElementsByName.textFieldsReq[];
//var noMealsReunion       = document.getElementsByName.textFieldsReq[];
//var birLodge             = document.getElementsByName.textFieldsReq[];
//var wilLodge             = document.getElementsByName.textFieldsReq[];
//var camTrailRv           = document.getElementsByName.textFieldsReq[];
//var tent                 = document.getElementsByName.textFieldsReq[];
//var offGround            = document.getElementsByName.textFieldsReq[];
//var fullName             = document.getElementsByName.textFieldsReq[];
//Global Variables
var checkboxes = document.getElementsByName('days');
var valid      = false;





function textFieldValid(){
    var textFieldsReq = document.getElementsByName('textFieldReq');
    for( var i=0;i<9;i++ ){
        if ( !textFieldsReq[i].value ){
            alert ( 'You need to fill in the required* text field!' );
            textFieldsReq[i].focus();
            return false;
        }
    }
    //if valid return true
    return true;
};
   

function checkboxesValid(){
    for ( var i = 0;i<checkboxes.length;i++ ){
        if ( checkboxes[i].checked ) {
         valid = true;
         break;
        }
    }
    if ( !valid ) {
        alert( 'You need to select at least one day!' );
        checkboxes[0].focus();
        return false;
    }
    return valid;
};

function lodgeValid(){
    var lodging = document.getElementsByName('lodge');
    for( var i=0; i<lodging.length; i++ ){
        if( lodging[i].checked ){
            valid=true;
            break;
        }
    }
    if ( !valid ) {
        alert( 'You need to select at least one option!' );
        lodging[0].focus();
        return false;
    }
    return valid;
};


function validate(textFieldsReq){
    return textFieldValid() && checkboxesValid() && lodgeValid();    
};

function selectAll( form ){
    for( var i=0,n=checkboxes.length;i<n;i++ ){
        checkboxes[i].checked = form.checked;
    }    
    return true;
};








