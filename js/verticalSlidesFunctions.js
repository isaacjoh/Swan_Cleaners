function slideDryClean(topZIndex){
    
    console.log(topZIndex); 
    
    $('.glyphicon-filter-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-filter-ID').addClass('glyphicon-selected'); 

    topZIndex = topZIndex + 1;
    var dryCleanImageID = $('#dryCleanImageID');
    var effect2 = 'slide';
    var options2 = {direction: 'up'}; 
    var duration2 = 500; 
    dryCleanImageID.css('z-index', topZIndex); 
    dryCleanImageID.toggle(effect2, options2, duration2); 

    var dryCleanInfoID = $('#dryCleanInfoID');
    var effect3 = 'slide';
    var options3 = {direction: 'down'}; 
    var duration3 = 500; 
    dryCleanInfoID.css('z-index', topZIndex); 
    dryCleanInfoID.toggle(effect3, options3, duration3); 

    if ($('#laundryImageID').is(':visible')){
        $('#laundryImageID').delay(501).fadeToggle(false); 
        $('#laundryInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#alterationsImageID').is(':visible')){
        $('#alterationsImageID').delay(501).fadeToggle(false); 
        $('#alterationsInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#pressImageID').is(':visible')){
        $('#pressImageID').delay(501).fadeToggle(false); 
        $('#pressInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#householdImageID').is(':visible')){
        $('#householdImageID').delay(501).fadeToggle(false); 
        $('#householdInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#contactUsImageID').is(':visible')){
        $('#contactUsImageID').delay(501).fadeToggle(false); 
        $('#contactUsInfoID').delay(501).fadeToggle(false); 
    } 
    
    return topZIndex; 
}

function slideLaundry(topZIndex){
    
    console.log(topZIndex); 
    
    $('.glyphicon-filter-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').addClass('glyphicon-selected'); 

    topZIndex = topZIndex + 1;
    var laundryImageID = $('#laundryImageID');
    var effect2 = 'slide';
    var options2 = {direction: 'up'}; 
    var duration2 = 500; 
    laundryImageID.css('z-index', topZIndex); 
    laundryImageID.toggle(effect2, options2, duration2);

    var laundryInfoID = $('#laundryInfoID');
    var effect3 = 'slide';
    var options3 = {direction: 'down'}; 
    var duration3 = 500; 
    laundryInfoID.css('z-index', topZIndex); 
    laundryInfoID.toggle(effect3, options3, duration3); 

    if ($('#dryCleanImageID').is(':visible')){
        $('#dryCleanImageID').delay(501).fadeToggle(false); 
        $('#dryCleanInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#alterationsImageID').is(':visible')){
        $('#alterationsImageID').delay(501).fadeToggle(false); 
        $('#alterationsInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#pressImageID').is(':visible')){
        $('#pressImageID').delay(501).fadeToggle(false); 
        $('#pressInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#householdImageID').is(':visible')){
        $('#householdImageID').delay(501).fadeToggle(false); 
        $('#householdInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#contactUsImageID').is(':visible')){
        $('#contactUsImageID').delay(501).fadeToggle(false); 
        $('#contactUsInfoID').delay(501).fadeToggle(false); 
    } 
    
    return topZIndex; 
}

function slideAlterations(topZIndex){
    
    console.log(topZIndex); 
    
    $('.glyphicon-filter-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').addClass('glyphicon-selected'); 

    topZIndex = topZIndex + 1;
    var alterationsImageID = $('#alterationsImageID');
    var effect2 = 'slide';
    var options2 = {direction: 'up'}; 
    var duration2 = 500; 
    alterationsImageID.css('z-index', topZIndex); 
    alterationsImageID.toggle(effect2, options2, duration2);

    var alterationsInfoID = $('#alterationsInfoID');
    var effect3 = 'slide';
    var options3 = {direction: 'down'}; 
    var duration3 = 500; 
    alterationsInfoID.css('z-index', topZIndex); 
    alterationsInfoID.toggle(effect3, options3, duration3); 

    if ($('#dryCleanImageID').is(':visible')){
        $('#dryCleanImageID').delay(501).fadeToggle(false); 
        $('#dryCleanInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#laundryImageID').is(':visible')){
        $('#laundryImageID').delay(501).fadeToggle(false); 
        $('#laundryInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#pressImageID').is(':visible')){
        $('#pressImageID').delay(501).fadeToggle(false); 
        $('#pressInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#householdImageID').is(':visible')){
        $('#householdImageID').delay(501).fadeToggle(false); 
        $('#householdInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#contactUsImageID').is(':visible')){
        $('#contactUsImageID').delay(501).fadeToggle(false); 
        $('#contactUsInfoID').delay(501).fadeToggle(false); 
    } 
    
    return topZIndex; 
}

function slidePress(topZIndex){
    
    console.log(topZIndex); 
    
    $('.glyphicon-filter-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').addClass('glyphicon-selected'); 

    topZIndex = topZIndex + 1;
    var pressImageID = $('#pressImageID');
    var effect2 = 'slide';
    var options2 = {direction: 'up'}; 
    var duration2 = 500; 
    pressImageID.css('z-index', topZIndex); 
    pressImageID.toggle(effect2, options2, duration2);

    var pressInfoID = $('#pressInfoID');
    var effect3 = 'slide';
    var options3 = {direction: 'down'}; 
    var duration3 = 500; 
    pressInfoID.css('z-index', topZIndex); 
    pressInfoID.toggle(effect3, options3, duration3); 

    if ($('#dryCleanImageID').is(':visible')){
        $('#dryCleanImageID').delay(501).fadeToggle(false); 
        $('#dryCleanInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#laundryImageID').is(':visible')){
        $('#laundryImageID').delay(501).fadeToggle(false); 
        $('#laundryInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#alterationsImageID').is(':visible')){
        $('#alterationsImageID').delay(501).fadeToggle(false); 
        $('#alterationsInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#householdImageID').is(':visible')){
        $('#householdImageID').delay(501).fadeToggle(false); 
        $('#householdInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#contactUsImageID').is(':visible')){
        $('#contactUsImageID').delay(501).fadeToggle(false); 
        $('#contactUsInfoID').delay(501).fadeToggle(false); 
    } 
    
    return topZIndex; 
}

function slideHousehold(topZIndex){
    
    console.log(topZIndex); 
    
    $('.glyphicon-filter-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').addClass('glyphicon-selected'); 

    topZIndex = topZIndex + 1;
    var householdImageID = $('#householdImageID');
    var effect2 = 'slide';
    var options2 = {direction: 'up'}; 
    var duration2 = 500; 
    householdImageID.css('z-index', topZIndex); 
    householdImageID.toggle(effect2, options2, duration2);

    var householdInfoID = $('#householdInfoID');
    var effect3 = 'slide';
    var options3 = {direction: 'down'}; 
    var duration3 = 500; 
    householdInfoID.css('z-index', topZIndex); 
    householdInfoID.toggle(effect3, options3, duration3); 

    if ($('#dryCleanImageID').is(':visible')){
        $('#dryCleanImageID').delay(501).fadeToggle(false); 
        $('#dryCleanInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#laundryImageID').is(':visible')){
        $('#laundryImageID').delay(501).fadeToggle(false); 
        $('#laundryInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#alterationsImageID').is(':visible')){
        $('#alterationsImageID').delay(501).fadeToggle(false); 
        $('#alterationsInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#pressImageID').is(':visible')){
        $('#pressImageID').delay(501).fadeToggle(false); 
        $('#pressInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#contactUsImageID').is(':visible')){
        $('#contactUsImageID').delay(501).fadeToggle(false); 
        $('#contactUsInfoID').delay(501).fadeToggle(false); 
    }
    
    return topZIndex; 
} 

function slideContactUs(topZIndex){
    
    console.log(topZIndex); 
    
    $('.glyphicon-filter-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-tint-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-scissors-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-leaf-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-gift-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').removeClass('glyphicon-selected'); 
    $('.glyphicon-phone-ID').addClass('glyphicon-selected'); 

    topZIndex = topZIndex + 1;
    var contactUsImageID = $('#contactUsImageID');
    var effect2 = 'slide';
    var options2 = {direction: 'up'}; 
    var duration2 = 500; 
    contactUsImageID.css('z-index', topZIndex); 
    contactUsImageID.toggle(effect2, options2, duration2);

    var contactUsInfoID = $('#contactUsInfoID');
    var effect3 = 'slide';
    var options3 = {direction: 'down'}; 
    var duration3 = 500; 
    contactUsInfoID.css('z-index', topZIndex); 
    contactUsInfoID.toggle(effect3, options3, duration3); 

    if ($('#dryCleanImageID').is(':visible')){
        $('#dryCleanImageID').delay(501).fadeToggle(false); 
        $('#dryCleanInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#laundryImageID').is(':visible')){
        $('#laundryImageID').delay(501).fadeToggle(false); 
        $('#laundryInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#alterationsImageID').is(':visible')){
        $('#alterationsImageID').delay(501).fadeToggle(false); 
        $('#alterationsInfoID').delay(501).fadeToggle(false); 
    }
    if ($('#pressImageID').is(':visible')){
        $('#pressImageID').delay(501).fadeToggle(false); 
        $('#pressInfoID').delay(501).fadeToggle(false); 
    } 
    if ($('#householdImageID').is(':visible')){
        $('#householdImageID').delay(501).fadeToggle(false); 
        $('#householdInfoID').delay(501).fadeToggle(false); 
    }
    
    return topZIndex; 
}

