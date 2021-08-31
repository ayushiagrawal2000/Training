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

//chart-section1 hover effect
var defaultValue = $(".cor").text();
var defaultHtml = $('.blocks-section1').html();
var defaultHtml2 = $('.blocks-section2').html();
var sectionDetails = $('.details-container').html();
$(".cor").hover(function(){
    console.log("inside in function");
    $(".chart-section-container").css("border", "2px solid black");
    $(this).text("description");
    $(this).css({"background":"#EDEDED", "color":"black"});
    $('.blocks-section1').html("<div><div><b>Title</b></div><div>some description about the title is gonna be here</div></div>");
    $('.blocks-section1 div').addClass("description-on-hover");
    $('.blocks-section2').html(sectionDetails);
},function(){
    console.log("inside out function");
    $(this).text(defaultValue);
    $(this).css({"background":"black", "color":"white"});
    $(".chart-section-container").css("border", "2px solid white");
    $('.blocks-section1').html(defaultHtml);
    $('.blocks-section1').css("display","flex");
    $('.blocks-section2').html(defaultHtml2);
});

//chart-section2 hover effect
var purchasesDefaultTitle = $(".purchase").text();

$('.purchase').hover(function() {
    $('.purchases-container').css("border","2px solid black");
    $(this).text("description");
    $(this).css({"background":"#EDEDED", "color":"black"});
},function(){
    $(this).text(purchasesDefaultTitle);
    $(this).css({"background":"black", "color":"white"});
    $(".purchases-container").css("border", "2px solid white");
});

$('.purchase-chart').hover(function() {
    $('.chart-description').css({"visibility":"visible","font-size":"8px"});
    $('.charts-wrapper').css("visibility","hidden");
},function(){
    $('.chart-description').css("visibility","hidden");
    $('.charts-wrapper').css("visibility","visible");
});

//chart-section3 hover effect

var text = `this is judt for testing here we gonna put some discription`
var suppliersDefaultTitle = $('.purchase').text();
var amountDefaultValue1 = $('.amount-value2').text();
var amountDefaultValue2 = $('.amount-value2').text();
$('.supplier').hover(function() {
    $('.suppliers').css("border","2px solid black");
    $(this).text(text);
    $(this).css({"background":"#EDEDED", "color":"black"});
},function(){
    $(this).text(suppliersDefaultTitle);
    $(this).css({"background":"black", "color":"white"});
    $(".suppliers").css("border", "2px solid white");
});

$('.amount-value1').hover(function() {
    $(this).text("description");
    $(this).css({"font-size":"10px","color":"black"});
},function() {
    $(this).text(amountDefaultValue1);
    $(this).css({"font-size":"25px","color":"#E35E56"});
});

$('.amount-value2').hover(function() {
    $(this).text("description");
    $(this).css({"font-size":"10px","color":"black"});
},function() {
    $(this).text(amountDefaultValue2);
    $(this).css({"font-size":"25px","color":"#63BF87"});
});

var purchasingDefaultHtml = $('.purchasing-charts-container').html();
$('.purchasing-data').hover(function() {
    $('.purchasing-charts-container').html('description');
    $('.purchasing-charts-container').css('padding','30px')
},function(){
    $('.purchasing-charts-container').html(purchasingDefaultHtml);
    $('.purchasing-charts-container').css('padding','0px')
});

