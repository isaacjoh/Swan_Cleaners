$(document).ready(function(){ 

    /* if ($('#dryCleanImageID').css('display') == 'none') {   
                console.log("3"); 
                console.log($('#dryCleanImageID').css('display')); 
                console.log($('#dryCleanImageID').css('visibility')); 
      
        }
        else {
            console.log("2");
        }
              });*/
    
     //Firefox
    $('body').bind('DOMMouseScroll', function(e){
        if(e.originalEvent.detail > 0) {
            //scroll down
            
            if ($('#dryCleanImageID').css('display') == 'block') {   
                if ($('#dryCleanImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideLaundry(topZIndex); 
                }
            }
            else if ($('#laundryImageID').css('display') == 'block') {
                if ($('#laundryImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideAlterations(topZIndex); 
                }
            }
            else if ($('#alterationsImageID').css('display') == 'block') {
                if ($('#alterationsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slidePress(topZIndex); 
                }
            }
            else if ($('#pressImageID').css('display') == 'block') {
                if ($('#pressImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                } 
                else {
                    topZIndex = slideHousehold(topZIndex); 
                }
            }
            else if ($('#householdImageID').css('display') == 'block') {
                if ($('#householdImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                } 
                else {
                    topZIndex = slideContactUs(topZIndex); 
                }
            }
            else if ($('#contactUsImageID').css('display') == 'block') {
                if ($('#contactUsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else { 
                    topZIndex = slideDryClean(topZIndex); 
                }
            }
            else {
                return false;
            } 
        } 
        else {
            //scroll up
            
            if ($('#dryCleanImageID').css('display') == 'block') {  
                if ($('#dryCleanImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideContactUs(topZIndex); 
                }
            }
            else if ($('#laundryImageID').css('display') == 'block') {
                if ($('#laundryImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideDryClean(topZIndex); 
                }
            }
            else if ($('#alterationsImageID').css('display') == 'block') {
                if ($('#alterationsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                } 
                else {
                    topZIndex = slideLaundry(topZIndex);
                }
            }
            else if ($('#pressImageID').css('display') == 'block') {
                if ($('#pressImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideAlterations(topZIndex); 
                }
            }
            else if ($('#householdImageID').css('display') == 'block') {
                if ($('#householdImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slidePress(topZIndex); 
                }
            }
            else if ($('#contactUsImageID').css('display') == 'block') {
                if ($('#contactUsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else { 
                    topZIndex = slideHousehold(topZIndex); 
                }
            }
            else {
                return false;
            } 
        }

     });

     //IE, Opera, Safari
    $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            //scroll down
            
            if ($('#dryCleanImageID').css('display') == 'block') { 
                if ($('#dryCleanImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideLaundry(topZIndex); 
                }
            }
            else if ($('#laundryImageID').css('display') == 'block') {
                if ($('#laundryImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideAlterations(topZIndex); 
                }
            }
            else if ($('#alterationsImageID').css('display') == 'block') {
                if ($('#alterationsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slidePress(topZIndex); 
                }
            }
            else if ($('#pressImageID').css('display') == 'block') {
                if ($('#pressImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                } 
                else {
                    topZIndex = slideHousehold(topZIndex); 
                }
            }
            else if ($('#householdImageID').css('display') == 'block') {
                if ($('#householdImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                } 
                else { 
                    topZIndex = slideContactUs(topZIndex); 
                }
            }
            else if ($('#contactUsImageID').css('display') == 'block') {
                if ($('#contactUsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                } 
                else {
                    topZIndex = slideDryClean(topZIndex); 
                }
            }
            else {
                return false;
            }
        }
        else {
            //scroll up
             
            if ($('#dryCleanImageID').css('display') == 'block') { 
                if ($('#dryCleanImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideContactUs(topZIndex); 
                }
            }
            else if ($('#laundryImageID').css('display') == 'block') {
                if ($('#laundryImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideDryClean(topZIndex); 
                }
            }
            else if ($('#alterationsImageID').css('display') == 'block') {
                if ($('#alterationsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideLaundry(topZIndex);
                }
            }
            else if ($('#pressImageID').css('display') == 'block') {
                if ($('#pressImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideAlterations(topZIndex); 
                }
            }
            else if ($('#householdImageID').css('display') == 'block') {
                if ($('#householdImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slidePress(topZIndex); 
                }
            }
            else if ($('#contactUsImageID').css('display') == 'block') {
                if ($('#contactUsImageID').hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
                    return false;
                }
                else {
                    topZIndex = slideHousehold(topZIndex); 
                }
            }
            else {
                return false;
            } 
        }

     });
            
});
