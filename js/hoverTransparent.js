$(document).ready(function(){
    $(".tint").mouseover(function() {
        $(this).animate({
            backgroundColor: "rgba(0,0,0,0)"
        }, "fast");
    }).mouseout(function() {
        $(this).animate({
            backgroundColor: "rgba(80,80,80,0.5)"
        }, "fast"); 
    });
}); 
