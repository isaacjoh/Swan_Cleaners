$(document).ready(function(){
    $(".myButton").click(function () {

        // Set the effect type
        var effect = 'slide';

        // Set the options for the effect type chosen
        var options = { direction: $('.mySelect').val() };

        // Set the duration (default: 400 milliseconds)
        var duration = 1500;

        $('#myDiv').toggle(effect, options, duration);

        console.log("hi");
    });
});

