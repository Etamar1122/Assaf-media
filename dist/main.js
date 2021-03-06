


//////// get modal element;
const modalElementArr = [  '#terms', '#promoModal']


/////// get the open modal link


const modalLinkArr = ["termsModal", "videoPrev"]
const termsModalLink = $("#termsModal");
const videoModalPrev = $("#videoPrev")


/////// get close button
const CloseBtn = $(".closebtn");


//////////////////////////////////////////////
///////////// Modal functions ////////////////

PDFObject.embed("/P428236-00.pdf", "#terms-container");

// OpenModal function (changes display to block)
const openModal = function(event){
   
        // Tryed to make it efficient, not working for some reason.
        // if( event.target.id ==( modalLinkArr[0] || ('rules') || ('cylabus-popup'))){
        // $(modalElementArr[0]).fadeIn()
        // $(modalElementArr[0]).css("display","block" );
        // } 
        
        if( event.target.id == modalLinkArr[0] ){
            $("#PDF").append(PDFObject.embed("/P428236-00.pdf", "#terms-container")) 
            $(modalElementArr[0]).fadeIn()
            $(modalElementArr[0]).css("display","block");
           
           
            }
            else if (event.target.id == 'cylabus-popup' ){
                $(modalElementArr[0]).fadeIn()
                $(modalElementArr[0]).css("display","block" );
                $("#terms-container").append(PDFObject.embed("/P428236-00.pdf", "#terms-container"))
            } 
            else if (event.target.id == 'rules' ){
                $(modalElementArr[0]).fadeIn()
                $(modalElementArr[0]).css("display","block" );
                $("#terms-container").append(PDFObject.embed("/P428236-00.pdf", "#terms-container"))
            }
             else if( event.target.id == modalLinkArr[1] ){
                 $(modalElementArr[1]).fadeIn()
                 $(modalElementArr[1]).css("display","flex" );
                 $("#frame").css("display","none");

        }
    
}




///////// close modal button function //////////////


const closeModal = function(e){

   if(e.target.id == 'video'){
         $("#promoVideo").remove();
         $(modalElementArr[1]).css("display","none" );
         $("#promoModal").append('<iframe id = "promoVideo"  src="https://www.youtube.com/embed/EIm4HvDgQCM"></iframe>');
         console.log("close button")
    } else{
       
            $(modalElementArr[0]).css("display","none" );
            console.log("close button")
            $("#PDF").empty();
            
       } 
    
    }
 



 //clicking outside closes modal
const clickOutside = function(event){
 
    if(event.target.id == "terms"){
        $(modalElementArr[0]).css("display","none");
        $("#PDF").empty();
    }
    
    if(event.target.id == "promoModal"){
        $("#promoVideo").remove();
        $(modalElementArr[1]).css("display","none" );
        $("#promoModal").append('<iframe id = "promoVideo"  src="https://www.youtube.com/embed/EIm4HvDgQCM"></iframe>');
    }
}




 

//////  Event listeners for modal window ///////// 



 CloseBtn.on('click' , closeModal);
 
 $(window).on('click', clickOutside);
 $('#rules').on('click' , openModal);
 $('#cylabus-popup').on('click' , openModal);
 videoModalPrev.on('click', '' , openModal);
 termsModalLink.on('click' , openModal);




/***************************************/
//////// modal section end /////////////
/**************************************/



/////////////////////
// Fadein function//

$(".header-text ").css('display','none');
$("#signup-now").css('display','none');
$(document).ready(setTimeout(function(){$(".header-text").fadeIn()},200));
$(document).ready(setTimeout(function(){$("#signup-now").fadeIn()},200));

/////////////////////





/////////////////////////////////////

///////// Form functions ///////////

///////////////////////////////////


// Validating form is filled currectly.
const inputError = $("#inputError");


function validate(e) {
    e.preventDefault();
    
    const fieldName = ['#kidomet', '#address','#city']
    const inputError = $("#inputError");
 

    ///// Email validation function //////

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    function ValidateEmail(inputText)
        {
           
            if(mailformat.test($("#email").val()) )   {
               return true
            }
            else
            {
                return false
            }
        }



 /////// Check function to prevent double coding ////////////

const Error = function(ID){
    inputError.addClass("visible");  
    $(ID).addClass("invalid");
    inputError.attr("aria-hidden", false); 
    inputError.attr("aria-invalid", true);
    $('#OK').css("display", "none");

    }


    //////////////  Actual validation ///////////

    let valid = true;
   
    const nameRegex =  /^[a-z\u05D0-\u05EA' -]+$/i ;

    if (!(nameRegex.test($("#firstname").val())) || ($('#firstname').val().length < 2 ||  $('#firstname').val().length > 16)){
        Error('#firstname');
        valid = false;
           
    } else{
        $('#firstname').removeClass("invalid")
    }

   
    if ($('#lastname').val().length < 2 ||  $('#lastname').val().length > 16 || !(nameRegex.test($("#lastname").val()))) {
        Error('#lastname');
        valid = false;
    } else{
        $('#lastname').removeClass("invalid")
    }


    if ($('#phonenumber').val().length != 7 ){
        Error('#phonenumber');
        valid = false;
    }  else{
        $('#phonenumber').removeClass("invalid")
    }
    
 
    if (ValidateEmail('#email')  != true){
        Error('#email');
        valid = false;
    } else{
        $("#email").removeClass("invalid");

    }


fieldName.forEach(function(field){
        
        const inputFields = $(`${field}`);
        
        if (!inputFields.val()) {
           Error(field);
           valid = false;
      }
      else{
         inputFields.removeClass("invalid")
      
    }
})



let checkboxes = ['#termofuse','#cylabus']
    checkboxes.forEach(function(checkbox){
                
          const checkboxField =  $(`${checkbox}`);

          if  (checkboxField.is(':checked') != true){
                 checkboxField.closest("div").addClass("invalid-checkbox");
                 $('#OK').css("display", "none")
                 valid = false;
                
                }
                else{
                    checkboxField.closest("div").removeClass("invalid-checkbox")
                 
                }
        })


    console.log("working")
      return valid;
    }
    


/////////////////////////////////////
//////////// Server function ///////

 async function newUser()   {
    
  
    const inputError = $("#inputError");
    let user = {
        user_name: $("#firstname").val(),
        user_lastname:  $("#lastname").val(),
        user_phonenumber: $("#kidomet").val()+ $("#phonenumber").val(),
        user_email: $("#email").val(),
        user_address: $("#adress").val(),
        user_city: $("#city").val()
    }
   
    await $.post('/', user, function (response) {  $('#OK').css("display", "block"); })
    
   

} 



//////////////////////////////////////////


///////// Submit to db function.//////////


const submit = $("#submit");

const onSubmit = function(e) {
    if(validate(e) != true){
        return
    }
    
    else{
        e.preventDefault()
         newUser(e)
         inputError.removeClass( "visible");     
         inputError.attr("aria-hidden", true);
         inputError.attr("aria-invalid", false);
         $("#contact-form").find('input').val('');
         inputError.removeClass("visible");  
        }

}


///// Submit on click listener ///////

 submit.on('click',onSubmit)

    
