//Check to make sure that all required field are filled out
//ref http://www.quirksmode.org/dom/error.html


function validate(reunionRegistration){
//variable declaration for form inputs
var fullName             = document.reunionRegistration.fullname.value;
var streetAddress        = document.reunionRegistration.street_address.value;
var cityCode             = document.reunionRegistration.city.value;
var stateCode            = document.reunionRegistration.state.value;
var zipCode              = document.reunionRegistration.zip_code.value;
var phoneNumber          = document.reunionRegistration.phone_number.value;
var emailAddress         = document.reunionRegistration.email_address.value;
var emergencyContactName = document.reunionRegistration.emer_contact_name.value;
var emergencyContactPhone= document.reunionRegistration.emer_contact_phone.value;   
var mondayCheck          = document.reunionRegistration.days.value;
var tuesdayCheck         = document.reunionRegistration.days.value;
var wednesdayCheck       = document.reunionRegistration.days.value;
var thursdayCheck        = document.reunionRegistration.days.value;
var fridayCheck          = document.reunionRegistration.days.value;
var saturdayCheck        = document.reunionRegistration.days.value;
var sundayCheck          = document.reunionRegistration.days.value;
var beforeNoonMonYes     = document.reunionRegistration.before_noon_monday.value; 
var beforeNoonMonNo      = document.reunionRegistration.before_noon_monday.value; 
var eatMealsReunion      = document.reunionRegistration.eat_option.value; 
var noMealsReunion       = document.reunionRegistration.eat_option.value;  
var birLodge             = document.reunionRegistration.birch.value; 
var wilLodge             = document.reunionRegistration.willow.value; 
var camTrailRv           = document.reunionRegistration.rv.value;
var tent                 = document.reunionRegistration.tent.value; 
var offGround            = document.reunionRegistration.off_ground.value;
var textError            = "Please fill in the required '*' fields";
var checkBoxError        = "Please Select the Appropriate Boxes";
var lodging              = [];
var days                 = [];
var textFieldsReq = document.getElementsByName('textFieldReq');

for(i=0,n=textFieldsReq.length;i<n;i++){
    if ( !textFieldsReq[i] ){
        alert ( 'You need to fill in ' + textFieldsReq[i] + '!');
        textFieldsReq[i].focus();
        return false;
        }
    }
    return true;
};

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
//        var fullName        = document.reunionRegistration.fullname.value;
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

