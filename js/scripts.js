console.log("connected!")
var x = document.title;
console.log(x)

var cuurentColor = 'white';

// Click event for color options
$('.color-option').click(function () {
    var newColor = $(this).data('color');
    changeColor(newColor);
});

// Function to change color of SVG elements
function changeColor(newColor) {
    $("#svg-container svg, #background").attr('fill', newColor);
    $("#svg-container svg, #rect").attr('fill', newColor);
    $("#svg-container svg, #triangle").attr('fill', newColor);
    $("#svg-container svg, #star").attr('fill', newColor);
    $("#svg-container svg, #other").attr('fill', newColor);
    $("#svg-container svg, #circle").attr('fill', newColor);

    currentColor = newColor;

}

$("#lightbulb").click(function () {
    alert('#alert');
});

$.alert({
    title: 'Pro Tip!',
    content: 'Use the paint brush to paint the colouring page. If you make a mistake, thats okay! Just use the eraser to clear colours!',
});

