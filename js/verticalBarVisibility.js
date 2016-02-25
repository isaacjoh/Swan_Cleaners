var topZIndex = 400; 

$(document).ready(function(){
    
    // main menu 
    var ready = false; 

    var lowZIndex = 399; 
    
    $('#anchorDryClean').click(function(){
        $('.glyphicon-filter-ID').addClass('glyphicon-selected'); 
        
        topZIndex = topZIndex + 1;
        var verticalLegend = $('#verticalLegendID');
        var effect = 'slide';
        var options = {direction: 'right'}; 
        var duration = 800; 
        verticalLegend.toggle(effect, options, duration); 
        
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
        
       /* var ironAnimationID = $('#ironAnimationID'); 
        var dryCleanIronAnimationID = $('#dryCleanIronAnimationID'); 
        var ironAnimationImage = $('#ironAnimationImage'); 
        ironAnimationImage.fadeIn(1); 
        ironAnimationID.css('z-index', 125); 
        dryCleanIronAnimationID.css('bottom', '-50vh'); 
        ironAnimationID.animate({top: '-=150vh'}, 1750); */
    });
    
    $('#anchorLaundry').click(function(){
        $('.glyphicon-tint-ID').addClass('glyphicon-selected'); 
        
        topZIndex = topZIndex + 1;
        var verticalLegend = $('#verticalLegendID');
        var effect = 'slide';
        var options = {direction: 'right'}; 
        var duration = 750; 
        verticalLegend.toggle(effect, options, duration); 
        
        var laundryID = $('#laundryImageID');
        var effect2 = 'slide';
        var options2 = {direction: 'up'}; 
        var duration2 = 500; 
        laundryID.css('z-index', topZIndex); 
        laundryID.toggle(effect2, options2, duration2);
         
        var laundryInfoID = $('#laundryInfoID');
        var effect3 = 'slide';
        var options3 = {direction: 'down'}; 
        var duration3 = 500; 
        laundryInfoID.css('z-index', topZIndex); 
        laundryInfoID.toggle(effect3, options3, duration3); 
    });
    
    $('#anchorAlterations').click(function(){
        $('.glyphicon-scissors-ID').addClass('glyphicon-selected'); 
        
        topZIndex = topZIndex + 1;
        var verticalLegend = $('#verticalLegendID');
        var effect = 'slide';
        var options = {direction: 'right'}; 
        var duration = 750; 
        verticalLegend.toggle(effect, options, duration); 
        
        var alterationsID = $('#alterationsImageID');
        var effect2 = 'slide';
        var options2 = {direction: 'up'}; 
        var duration2 = 500; 
        alterationsID.css('z-index', topZIndex); 
        alterationsID.toggle(effect2, options2, duration2);
         
        var alterationsInfoID = $('#alterationsInfoID');
        var effect3 = 'slide';
        var options3 = {direction: 'down'}; 
        var duration3 = 500; 
        alterationsInfoID.css('z-index', topZIndex); 
        alterationsInfoID.toggle(effect3, options3, duration3); 
    });
    
    $('#anchorPress').click(function(){
        $('.glyphicon-leaf-ID').addClass('glyphicon-selected'); 
        
        topZIndex = topZIndex + 1;
        var verticalLegend = $('#verticalLegendID');
        var effect = 'slide';
        var options = {direction: 'right'}; 
        var duration = 750; 
        verticalLegend.toggle(effect, options, duration); 
        
        var pressID = $('#pressImageID');
        var effect2 = 'slide';
        var options2 = {direction: 'up'}; 
        var duration2 = 500; 
        pressID.css('z-index', topZIndex); 
        pressID.toggle(effect2, options2, duration2);
         
        var pressInfoID = $('#pressInfoID');
        var effect3 = 'slide';
        var options3 = {direction: 'down'}; 
        var duration3 = 500; 
        pressInfoID.css('z-index', topZIndex); 
        pressInfoID.toggle(effect3, options3, duration3); 
    });
    
    $('#anchorHousehold').click(function(){
        $('.glyphicon-gift-ID').addClass('glyphicon-selected'); 
        
        topZIndex = topZIndex + 1;
        var verticalLegend = $('#verticalLegendID');
        var effect = 'slide';
        var options = {direction: 'right'}; 
        var duration = 750; 
        verticalLegend.toggle(effect, options, duration); 
        
        var householdID = $('#householdImageID');
        var effect2 = 'slide';
        var options2 = {direction: 'up'}; 
        var duration2 = 500; 
        householdID.css('z-index', topZIndex); 
        householdID.toggle(effect2, options2, duration2);
         
        var householdInfoID = $('#householdInfoID');
        var effect3 = 'slide';
        var options3 = {direction: 'down'}; 
        var duration3 = 500; 
        householdInfoID.css('z-index', topZIndex); 
        householdInfoID.toggle(effect3, options3, duration3); 
    });
    
    $('#anchorContactUs').click(function(){
        $('.glyphicon-phone-ID').addClass('glyphicon-selected'); 
        
        topZIndex = topZIndex + 1;
        var verticalLegend = $('#verticalLegendID');
        var effect = 'slide';
        var options = {direction: 'right'}; 
        var duration = 750; 
        verticalLegend.toggle(effect, options, duration); 
        
        var contactUsID = $('#contactUsImageID');
        var effect2 = 'slide';
        var options2 = {direction: 'up'}; 
        var duration2 = 500; 
        contactUsID.css('z-index', topZIndex); 
        contactUsID.toggle(effect2, options2, duration2);
         
        var contactUsInfoID = $('#contactUsInfoID');
        var effect3 = 'slide';
        var options3 = {direction: 'down'}; 
        var duration3 = 500; 
        contactUsInfoID.css('z-index', topZIndex); 
        contactUsInfoID.toggle(effect3, options3, duration3); 
    });
    
    //half and half slides 
    
    $('.glyphicon-filter-ID').click(function(){ 
        if ($(this).hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
            return false;
        }
        else {
            topZIndex = slideDryClean(topZIndex); 
        }
    });
    
    $('.glyphicon-tint-ID').click(function(){
        if ($(this).hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
            return false;
        }
        else {
            topZIndex = slideLaundry(topZIndex); 
        }
    });
    
    $('.glyphicon-scissors-ID').click(function(){
        if ($(this).hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
            return false;
        }
        else {
            topZIndex = slideAlterations(topZIndex); 
        }
    });
    
    $('.glyphicon-leaf-ID').click(function(){
        if ($(this).hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
            return false;
        }
        else {
            topZIndex = slidePress(topZIndex); 
        }
    });
    
    $('.glyphicon-gift-ID').click(function(){
        if ($(this).hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
            return false;
        }
        else {
            topZIndex = slideHousehold(topZIndex); 
        }
    });
    
    $('.glyphicon-phone-ID').click(function(){
        if ($(this).hasClass('glyphicon-selected') || $('#dryCleanImageID:animated').length || $('#dryCleanInfoID:animated').length || $('#laundryImageID:animated').length || $('#laundryImageID:animated').length || $('#alterationsImageID:animated').length || $('#alterationsImageID:animated').length || $('#pressImageID:animated').length || $('#pressImageID:animated').length || $('#householdImageID:animated').length || $('#householdImageID:animated').length || $('#contactUsImageID:animated').length || $('#contactUsImageID:animated').length){
            return false;
        }
        else {
            topZIndex = slideContactUs(topZIndex); 
        }
    });
    
}); 





