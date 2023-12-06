console.log("connected!")
var x = document.title;
console.log(x)


var newColor;

// Click event for color options
$('.color-option').click(function () {
    newColor = $(this).data('color');
    console.log(newColor);
   
});

$(".shape").on("click", function () {
    $(this).attr('fill', newColor);
});

$("#lightbulb").click(function () {
    alert('#Pro Tip!Use the paint brush to paint the colouring page. If you make a mistake, thats okay! Just use the eraser to clear colours!');
});


