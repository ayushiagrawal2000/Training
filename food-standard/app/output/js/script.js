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
    $(".chart-section-container").css("border", "3px solid black");
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
    $(".chart-section-container").css("border", "3px solid white");
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
var purchasesDefaultTitle = $(".purchase p").text();
var chartsDefault = $(".charts-wrapper").html();
function purchaseTitleOnHover(text, background, color, border) {
    $('.purchase p').text(text);
    $('.purchase').css({"background":background, "color":color});
    $(".purchases-container").css("border", border);
}

var chartDescription = `some description about the purchasing chart
description about the purch description about the purch`;
function purchaseChartOnHover(text,padding,font) {
    $('.charts-wrapper').html(text);
    $('.charts-wrapper').css({"padding":padding,"font-size":font});
}

$('.purchase').hover(function() {
    purchaseTitleOnHover("description","#EDEDED","black","3px solid black");
},function(){
    purchaseTitleOnHover(purchasesDefaultTitle,"black","white","3px solid white");
});

$('.purchase-chart').hover(function() {
    purchaseChartOnHover(chartDescription,"10px","10px");
},function(){
    purchaseChartOnHover(chartsDefault,"0px");
});

//chart-section3 hover effect

var supplierText = `this is judt for testing here we gonna put some discription`
var suppliersDefaultTitle = $('.supplier p').text();
var amountDefaultValue1 = $('.amount-value2').text();
var amountDefaultValue2 = $('.amount-value2').text();
function supplierTitleOnHover(text, border,background,color) {
    $('.suppliers').css("border",border);
    $('.supplier p').text(text);
    $('.supplier').css({"background":background, "color":color});
}

$('.supplier').hover(function() {
    supplierTitleOnHover(supplierText, "3px solid black", "#EDEDED", "black");
},function(){
    supplierTitleOnHover(suppliersDefaultTitle, "3px solid white", "black", "white");
});

function amountSectionOnHover(className, value, color, size) {
    $(className).text(value);
    $(className).css({"font-size":size,"color":color});
}

$('.amount-value1').hover(function() {
    amountSectionOnHover(".amount-value1", "description", "black", "10px");
},function() {
    amountSectionOnHover(".amount-value1", amountDefaultValue1, "#E35E56", "25px");
});

$('.amount-value2').hover(function() {
    amountSectionOnHover(".amount-value2","description","black","10px");
},function() {
    amountSectionOnHover(".amount-value2",amountDefaultValue2,"#63BF87","25px");
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
    $('.amount-value2').unbind('mouseenter mouseleave');
    $('.purchasing-data').unbind('mouseenter mouseleave');
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
        purchaseTitleOnHover(purchasesDefaultTitle,"black","white","3px solid white");
    }else {
        purchaseTitleOnHover("description","#EDEDED","black","3px solid black");
    }
});

$('.purchase-chart-info').click(function() {
    count++;
    if(count % 2 == 0) {
        purchaseChartOnHover(chartsDefault,"0px");
    }else {
        purchaseChartOnHover(chartDescription,"10px","10px");
    }
});

$('.supplier-title-info').click(function() {
    count++;
    if(count % 2 == 0) {
        supplierTitleOnHover(suppliersDefaultTitle, "3px solid white", "black", "white");
    }else {
        supplierTitleOnHover(supplierText, "3px solid black", "#EDEDED", "black");
    }
});

$('.amount-section1-info').click(function() {
    count++;
    if(count % 2 == 0) {
        amountSectionOnHover(".amount-value1", amountDefaultValue1, "#E35E56", "25px");
    }else {
        amountSectionOnHover(".amount-value1", "description", "black", "10px");
    }
});

$('.amount-section2-info').click(function() {
    count++;
    if(count % 2 == 0) {
        amountSectionOnHover(".amount-value2",amountDefaultValue2,"#63BF87","25px");
    }else {
        amountSectionOnHover(".amount-value2","description","black","10px");
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