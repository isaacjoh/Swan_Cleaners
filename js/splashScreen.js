$(document).ready(function(){
    $('.css3button').click(function(){
        
        $('.splashscreen').stop().fadeOut(2500); 
        
        $('.dryCleanTab').delay(2200).fadeIn(200);
        $('.laundryTab').delay(2200).fadeIn(500); 
        $('.alterationsTab').delay(2200).fadeIn(900); 
        $('.pressTab').delay(2200).fadeIn(1200); 
        $('.householdTab').delay(2200).fadeIn(1500);
        $('.contactUsTab').delay(2200).fadeIn(1800);
    });
}); 
    
    