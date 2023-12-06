console.log("connected!")
var x = document.title;
console.log(x)


var newColor;
var floral = $("#fresh-cut-flowers");
var catus = $("#catus");

// Click event for color options
$('.color-option').click(function () {
    newColor = $(this).data('color');
    console.log(newColor);

});


// example:
// $(".shape").on("click", function () {
//     $(this).attr('fill', newColor);
// });

$(".cls-1, .cls-2, .cls-3").on("click", function () {
    console.log("element worked!");
    $(this).attr('fill', newColor);
});

$(".Cls-1, .Cls-2, .Cls-3 .Cls-4 .Cls-5 .Cls-6").on("click", function () {
    console.log("element worked!");
    $(this).attr('fill', newColor);
});

$("#lightbulb").click(function () {
    alert('#Pro Tip!Use the paint brush to paint the colouring page. If you make a mistake, thats okay! Just use the eraser to clear colours!');
});

$("#flowers").on("click", function () {
    floral.show();
});

$("#catci").on("click", function () {
    catus.show();
});

$("#catci").on("click", function () {
    floral.hide();
});

$("#flowers").on("click", function () {
    catus.hide();
});

// $("#tip").on("click", function () {
//     $(“body”).css(“cursor”, “cursor” + newColor + ("..//imgs/tip-01.png")
// });
