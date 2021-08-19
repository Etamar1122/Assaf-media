


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



// OpenModal function (changes display to block)
const openModal = function(event){
   
        // Tryed to make it efficient, not working for some reason.
        // if( event.target.id ==( modalLinkArr[0] || ('rules') || ('cylabus-popup'))){
        // $(modalElementArr[0]).fadeIn()
        // $(modalElementArr[0]).css("display","block" );
        // } 
        
        if( event.target.id == modalLinkArr[0] ){
            $(modalElementArr[0]).fadeIn()
            $(modalElementArr[0]).css("display","block" );
            } 
            else if (event.target.id == 'cylabus-popup' ){
                $(modalElementArr[0]).fadeIn()
                $(modalElementArr[0]).css("display","block" );
            } 
            else if (event.target.id == 'rules' ){
                $(modalElementArr[0]).fadeIn()
                $(modalElementArr[0]).css("display","block" );
            }
             else if( event.target.id == modalLinkArr[1] ){
                 $(modalElementArr[1]).fadeIn()
                 $(modalElementArr[1]).css("display","flex" );
                 $("#frame").css("display","none");

        }
    
}

/////////////////////////////////////////////////////

// const openVideoModal = function(){
//     videoModal.fadeIn()
//     videoModal.css("display","block" );

// }

// closeModal function (changes display to none)

/////////////////////////////////////////////////////



///////// close modal button function //////////////


const closeModal = function(e){
    if(e.target.id == modalLinkArr[0]){
        $(modalElementArr[0]).css("display","none" );
        console.log("close button")
        
   } 

   if(e.target.id == 'video'){
         $("#promoVideo").remove();
         $(modalElementArr[1]).css("display","none" );
         $("#promoModal").append('<iframe id = "promoVideo"  src="https://www.youtube.com/embed/EIm4HvDgQCM"></iframe>');
         console.log("close button")
    }
 }



 //clicking outside closes modal
const clickOutside = function(event){
 
    if(event.target.id == "terms"){
        $(modalElementArr[0]).css("display","none");
    }
    
    if(event.target.id == "promoModal"){
        $("#promoVideo").remove();
        $(modalElementArr[1]).css("display","none" );
        $("#promoModal").append('<iframe id = "promoVideo"  src="https://www.youtube.com/embed/EIm4HvDgQCM"></iframe>');
    }
}



// const video = $("#videoEmb");
 

//////  Event listeners for modal window ///////// 



 CloseBtn.on('click' , closeModal);
 $(window).on('click', clickOutside);
 $('#rules').on('click' , openModal);
 $('#cylabus-popup').on('click' , openModal);
 videoModalPrev.on('click', '' , openModal);
 termsModalLink.on('click' , openModal);






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
    
    const fieldName = ['#kidomet','#email', '#address','#city']
    const inputError = $("#inputError");
 
    
const checkError = function(ID){
    inputError.addClass("visible");  
    $(ID).addClass("invalid");
    inputError.attr("aria-hidden", false); 
    inputError.attr("aria-invalid", true);
    $('#OK').css("display", "none");

    }


    let valid = true;



    if ($('#firstname').val().length < 2 ||  $('#firstname').val().length > 16){
        checkError('#firstname');
        valid = false;
    } else{
        $('#firstname').removeClass("invalid")
    }

   
    if ($('#lastname').val().length < 2 ||  $('#lastname').val().length > 16){
        checkError('#lastname');
        valid = false;
    } else{
        $('#lastname').removeClass("invalid")
    }


    if ($('#phonenumber').val().length != 7 ){
        checkError('#phonenumber');
        valid = false;
    }  else{
        $('#phonenumber').removeClass("invalid")
    }
    
    
    fieldName.forEach(function(field){
        
        const inputFields = $(`${field}`);
        
        if (!inputFields.val()) {
           checkError(field);
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


$(document).on('click', function(e){ console.log (e.target.id) } )

 submit.on('click',onSubmit)


