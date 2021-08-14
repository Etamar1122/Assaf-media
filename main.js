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
    videoModal.fadeOut("slow");
 
    videoModal.css("display","none" );
 
  }

 //clicking outside closes modal
const clickOutsideTerms = function(event){
    console.log(event)
    if(event.target.id == "terms"){
        termsModal.css("display","none");
    }
}

const clickOutsideVid = function(event){
    console.log(event)
    if(event.target.id == "promoModal"){
        videoModal.css("display","none");
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