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
var defaultValue = $(".cor p").text();
var defaultHtml = $('.blocks-section1').html();
var defaultHtml2 = $('.blocks-section2').html();
var sectionDetails = $('.details-container').html();

function onHover() {
    $(".chart-section-container").css("border", "2px solid black");
    $(".cor p").text("description");
    $(".cor").css({"background":"#EDEDED", "color":"black"});
    $('.blocks-section1').html("<div><div><b>Title</b></div><div>some description about the title is gonna be here</div></div>");
    $('.blocks-section1 div').addClass("description-on-hover");
    $('.blocks-section2').html(sectionDetails);
}

function onHoverOut() {
    console.log("inside out function");
    $(".cor p").text(defaultValue);
    $(".cor").css({"background":"black", "color":"white"});
    $(".chart-section-container").css("border", "2px solid white");
    $('.blocks-section1').html(defaultHtml);
    $('.blocks-section1').css("display","flex");
    $('.blocks-section2').html(defaultHtml2);
}

$(".cor").hover(function(){
   onHover();
},function(){
    onHoverOut();
});

//chart-section2 hover effect
var purchasesDefaultTitle = $(".purchase").text();
var chartsDefault = $(".charts-wrapper").html();
function purchaseTitleHoverOut() {
    $('.purchase p').text(purchasesDefaultTitle);
    $('.purchase').css({"background":"black", "color":"white"});
    $(".purchases-container").css("border", "2px solid white");
}

function purchaseTitleOnHover() {
    $('.purchases-container').css("border","2px solid black");
    $('.purchase p').text("description");
    $('.purchase').css({"background":"#EDEDED", "color":"black"});
}
var description = `some description about the purchasing chart
description about the purch description about the purch`;
function purchaseChartOnHover() {
    $('.charts-wrapper').html(description);
    $('.charts-wrapper').css({"padding":"10px","font-size":"10px"});
}

function purchaseChartHoverOut() {
    $('.charts-wrapper').html(chartsDefault);
    $('.charts-wrapper').css("padding","0px");
}

$('.purchase').hover(function() {
    purchaseTitleOnHover();
},function(){
    purchaseTitleHoverOut();
});

$('.purchase-chart').hover(function() {
   purchaseChartOnHover();
},function(){
    purchaseChartHoverOut();
});

//chart-section3 hover effect

var text = `this is judt for testing here we gonna put some discription`
var suppliersDefaultTitle = $('.supplier p').text();
var amountDefaultValue1 = $('.amount-value2').text();
var amountDefaultValue2 = $('.amount-value2').text();
function supplierTitleOnHover() {
    $('.suppliers').css("border","2px solid black");
    $('.supplier p').text(text);
    $('.supplier').css({"background":"#EDEDED", "color":"black"});
}
function supplierTitleHoverOut() {
    $(".supplier p").text(suppliersDefaultTitle);
    $(".supplier").css({"background":"black", "color":"white"});
    $(".suppliers").css("border", "2px solid white");
}
$('.supplier').hover(function() {
    supplierTitleOnHover();
},function(){
    supplierTitleHoverOut();
});

function amountSection1OnHover(value, color, size) {
    $('.amount-value1').text(value);
    $('.amount-value1').css({"font-size":size,"color":color});
}

function amountSection2OnHover(value, color, size) {
    $('.amount-value2').text(value);
    $('.amount-value2').css({"font-size":size,"color":color});
}

$('.amount-value1').hover(function() {
    amountSection1OnHover("description","black","10px");
},function() {
    amountSection1OnHover(amountDefaultValue1,"#E35E56","25px")
});

$('.amount-value2').hover(function() {
    amountSection2OnHover("description","black","10px");
},function() {
    amountSection2OnHover(amountDefaultValue2,"#63BF87","25px");
});

var purchasingDefaultHtml = $('.purchasing-charts-container').html();
function purchasingChartOnHover(html,padding) {
    $('.purchasing-charts-container').html(html);
    $('.purchasing-charts-container').css('padding',padding);
}
$('.purchasing-data').hover(function() {
    purchasingChartOnHover("description","30px");
},function(){
    purchasingChartOnHover(purchasingDefaultHtml,"0px");
});

//toggle effect for mobile view section 1
var media = window.matchMedia("(max-width: 500px)")
if(media.matches) {
    $('.cor').unbind('mouseenter mouseleave');
    $('.purchase').unbind('mouseenter mouseleave');
    $('.purchase-chart').unbind('mouseenter mouseleave');
    $('.supplier').unbind('mouseenter mouseleave');
    $('.amount-value1').unbind('mouseenter mouseleave');
    $('amount-value2').unbind('mouseenter mouseleave');
    $('purchasing-data').unbind('mouseenter mouseleave');
}
var chartDetails = $('.charts-container').html();
var count = 0;
$('.cor-icon').click(function(){
    count++;
    if(count % 2 == 0) {
        $(".cor p").text(defaultValue);
        $(".cor").css({"background":"black", "color":"white"});
        $(".chart-section-container").css("border", "2px solid white");    
    }
    else {
        $(".chart-section-container").css("border", "2px solid black");
        $(".cor p").text("description");
        $(".cor").css({"background":"#EDEDED", "color":"black"});   
    }
});

$('.details-icon').click(function() {
    count++;
    if(count % 2 == 0) {
        $('.charts-container').html(chartDetails);
    }else {
        $('.charts-container').html(sectionDetails);
    }
});

$('.purchase-title-info').click(function(){
    count++;
    if(count % 2 == 0) {
        purchaseTitleHoverOut();
    }else {
        purchaseTitleOnHover();
    }
});

$('.purchase-chart-info').click(function() {
    count++;
    if(count % 2 == 0) {
        purchaseChartHoverOut();
    }else {
        purchaseChartOnHover();
    }
});

$('.supplier-title-info').click(function() {
    count++;
    if(count % 2 == 0) {
        supplierTitleHoverOut();
    }else {
        supplierTitleOnHover();
    }
});

$('.amount-section1-info').click(function() {
    count++;
    if(count % 2 == 0) {
        amountSection1OnHover(amountDefaultValue1,"#E35E56","25px");
    }else {
        amountSection1OnHover("description","black","10px");
    }
});

$('.amount-section2-info').click(function() {
    count++;
    if(count % 2 == 0) {
        amountSection2OnHover(amountDefaultValue2,"#63BF87","25px");
    }else {
        amountSection2OnHover("description","black","10px");
    }
});

$('.purchasing-chart-info').click(function() {
    count++;
    if(count % 2 == 0) {
        purchasingChartOnHover(purchasingDefaultHtml,"0px");
    }else {
        purchasingChartOnHover("description","30px");
    }
});