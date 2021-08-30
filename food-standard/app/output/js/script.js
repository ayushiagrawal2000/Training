function battery(charge) {
    var index = 0;
    $(".battery .bar").each(function() {
    var power = Math.round(charge / 10);
    if (index != power) {
        $(this).addClass("active");
        index++;
    } else {
        $(this).removeClass("active");
    }
    });
}
battery(67.15); // (67%) Any number 100 or lower will work, Including decimals.

//hover effect
$(".chart-title").hover(function(){
    console.log("inside in function");
    $(".chart-section-container").css("border", "2px solid black");
    $(this).text("description");
    $(this).css({"background":"#EDEDED", "color":"black"});
},function(){
    console.log("inside out function");
    $(".chart-section-container").css("border", "2px solid white");
});
