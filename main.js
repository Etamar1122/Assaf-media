//get modal element;
const termsModal = $("#terms");
const videoModal = $("#promoModal")

//get the open modal link

const termsModalLink = $("#termsModal");
const videoModalPrev = $("#videoPrev")
//get close button

const termsCloseBtn = $(".closebtn");

// OpenModal function (changes display to block)
const openTermsModal = function(){
    termsModal.fadeIn()
    termsModal.css("display","block" );

}

const openVideoModal = function(){
    videoModal.fadeIn()
    videoModal.css("display","block" );

}

// closeModal function (changes display to none)
const closeModal = function(){
    termsModal.fadeOut("slow");
     
    termsModal.css("display","none" );
 
  }

  const closeVideoModal = function(){
    $("#promoVideo").remove();
    videoModal.css("display","none" );
    $("#youtubeVid").append('<iframe id = "promoVideo"  src="https://www.youtube.com/embed/EIm4HvDgQCM"></iframe>');
    
  }

 //clicking outside closes modal
const clickOutsideTerms = function(event){
 
    if(event.target.id == "terms"){
        termsModal.css("display","none");
    }
}

const clickOutsideVid = function(event){
   
    if(event.target.id == "promoModal"){
        
        $("#promoVideo").remove();
        videoModal.css("display","none" );
        $("#youtubeVid").append('<iframe id = "promoVideo"  src="https://www.youtube.com/embed/EIm4HvDgQCM"></iframe>');
    }
}

const video = $("#videoEmb");
 // Event listeners. 
 termsModalLink.on('click' , openTermsModal);

 termsCloseBtn.on('click' , closeModal);

$(window).on('click', clickOutsideTerms);



videoModalPrev.on('click' , openVideoModal);

termsCloseBtn.on('click' , closeVideoModal);

$(window).on('click', clickOutsideVid);



// Fadein function
$(".header-text ").css('display','none');
$("#signup-now").css('display','none');
$(document).ready(setTimeout(function(){$(".header-text").fadeIn()},200));
$(document).ready(setTimeout(function(){$("#signup-now").fadeIn()},200));