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

function validate(textFieldsReq){
//variable declaration for form inputs


var textError            = "Please fill in the required '*' fields";

var textFieldsReq = document.getElementsByName('textFieldReq');

for(i=0,n=textFieldsReq.length;i<=n;i++){
    if ( textFieldsReq[i] === '' ){
        alert ( 'You need to fill in the required* text field!');
        textFieldsReq[i].focus();
        return false;
        }
    }
    
    return true;
};


//var daysArray = [];
//
//function check(days){
//    var days = documnet.getElementsByName('days');
//    for(i=0,n=days.length;i<n;i++;){
//        if(days[i].length === 0){
//            alert('You need to check at least one day!')
//            days[i].focus();
//            return false;
//        }
//    }
//    
//    daysArray = days.push();
//}

//Check all button for Days
function selectAll(form){
    var checkboxes = document.getElementsByName('days');
    for(var i=0,n=checkboxes.length;i<n;i++){
    checkboxes[i].checked = form.checked;
    }
};







//I cannot get this section of code to work. It is supposed to place the error message right next to the text field.
////This bit of code checks W3C DOM Support for browsers with weak/no W3C DOM engine
//var W3CDOM = (document.getElementsByTagName && document.createElement);
//
//window.onload = function () {
//	document.forms[0].onsubmit = function() {
//		return validate();
//	};
//};
//
////This function initializes the validation and makes the form = true, sets focus on the first error, and creates a null errorstring for non-W3C DOM browsers
//function validate(){
//	validForm = true;
//	firstError = null;
//	errorstring = '';
//	var textError       = 'This field is required';
//        var fullName        = document.getElementsByName.textFieldsReq[].fullname.value;
//        var email_address   = document.reunionRegistration.email_address.value;
//
//		if  ( !fullName.value )
//			writeError( fullName,textError );
//
//		if( !W3CDOM )
//			alert(errorstring);
//
//		if( firstError )
//			firstError.focus();
//
//		if( validForm )
//			alert('Thank you for registering. A confirmation email will be sent to the email of record.');
//
//		return false;
//}
//
//function writeError( obj,message ) {
//    validForm = false; //writeError() is called and the form is set to false
//    if( obj.hasError ) return; 
//    if( W3CDOM ) {
//	obj.className += ' error';
//	obj.onchange = removeError;
//	var sp = document.createElement( "span" );
//	sp.className = 'error';
//	sp.appendChild(document.createTextNode(message));
//	obj.parentNode.appendChild(sp);
//	obj.hasError = sp;
//}
//    else {
//	errorstring += obj.name + ': ' + message + '\n';
//		obj.hasError = true;
//        }
//    if(!firstError)
//	firstError = obj;
//    }
//
//function removeError() {
//	this.className = this.className.substring(0,this.className.lastIndexOf(' '));
//	this.parentNode.removeChild(this.hasError);
//	this.hasError = null;
//	this.onchange = null;
//}

