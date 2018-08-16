$(document).ready(function(){
    $("*").on("click", function(e){
        console.log(e.target);
        console.log("The event type is " + e.type);
        console.log("X Coordinate of the event is " + e.pageX);
        console.log("Y Coordinate of the event is " + e.pageY);
        e.stopPropagation();
    });

});