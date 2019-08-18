/*require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
	var $ = require("jquery")(window);
});*/

$(function(){
    //alert("hi");
});

/*
// soll svg dateien umwandeln, damit man über css die farbe anpassne kann
jQuery('img[src$=".svg"]').each(function() {
    ­    var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');    
        jQuery.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID );
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');    
    });
    */

// das konzept - interaktiv

$(document).ready(function() {
    $(".philosophie").click(function(){
        $("#tractor1").css("visibility", "visible");
        $("#tractor2, #tractor3, #tractor4,#tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $(".philosophie").css("color", "#57CF95");
        $(".abo, .service, .prozess, .community, .partner, .ui").css("color", "#203959");
        $("#textPhilosophie").css("display","block");
        $("#textPartner, #textCommunity, #textProzess, #textNutzererlebnis, #textAbo, #textService").css("display","none");
    });
    $(".partner").click(function(){
        $("#tractor1, #tractor3, #tractor4,#tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor2").css("visibility", "visible");
        $(".abo, .service, .prozess, .community, .philosophie, .ui").css("color", "#203959");
        $(".partner").css("color", "#57CF95");
        $("#textPartner").css("display","block");
        $("#textPhilosophie, #textCommunity, #textProzess, #textNutzererlebnis, #textAbo, #textService").css("display","none");
    });
    $(".community").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor4,#tractor5, #tractor6").css("visibility", "hidden");
        $("#tractor7").css("visibility", "visible");
        $(".abo, .service, .prozess, .partner, .philosophie, .ui").css("color", "#203959");
        $(".community").css("color", "#57CF95");
        $("#textCommunity").css("display","block");
        $("#textPhilosophie, #textPartner, #textProzess, #textNutzererlebnis, #textAbo, #textService").css("display","none");
    });
    $(".prozess").click(function(){
        $("#tractor1, #tractor2, #tractor4,#tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor3").css("visibility", "visible");
        $(".abo, .service, .community, .partner, .philosophie, .ui").css("color", "#203959");
        $(".prozess").css("color", "#57CF95");
        $("#textProzess").css("display","block");
        $("#textPhilosophie, #textPartner, #textCommunity, #textNutzererlebnis, #textAbo, #textService").css("display","none");
    });
    $(".ui").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor4,#tractor5, #tractor7").css("visibility", "hidden");
        $("#tractor6").css("visibility", "visible");
        $(".ui").css("color", "#57CF95");
        $(".abo, .service, .prozess, .community, .partner, .philosophie").css("color", "#203959");
        $("#textNutzererlebnis").css("display","block");
        $("#textPhilosophie, #textPartner, #textCommunity, #textProzess, #textAbo, #textService").css("display","none");
    });
    $(".abo").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor4").css("visibility", "visible");
        $(".service, .prozess, .community, .partner, .philosophie, .ui").css("color", "#203959");
        $(".abo").css("color", "#57CF95");
        $("#textAbo").css("display","block");
        $("#textPhilosophie, #textPartner, #textCommunity, #textProzess, #textNutzererlebnis, #textService").css("display","none");
    });
    $(".service").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor4, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor5").css("visibility", "visible");
        $(".abo, .prozess, .community, .partner, .philosophie, .ui").css("color", "#203959");
        $(".service").css("color", "#57CF95");
        $("#textService").css("display","block");
        $("#textPhilosophie, #textPartner, #textCommunity, #textProzess, #textNutzererlebnis, #textAbo").css("display","none");
    });
});


// Prozess Abildung

$(document).ready(function() {
    $(".übersichtVerpackung").hover(function(){
        $("#boxVerpackung").css("visibility", "visible");
    }, function() {
        $("#boxVerpackung").css("visibility", "hidden");
    });

    $(".übersichtApp").hover(function(){
        $("#boxApp").css("visibility", "visible");
    }, function() {
        $("#boxApp").css("visibility", "hidden");
    });

    $(".übersichtEinkaufswagen").hover(function(){
        $("#boxEinkaufswagen").css("visibility", "visible");
    }, function() {
        $("#boxEinkaufswagen").css("visibility", "hidden");
    });

    $(".übersichtLieferung").hover(function(){
        $("#boxLieferung").css("visibility", "visible");
    }, function() {
        $("#boxLieferung").css("visibility", "hidden");
    });

    $(".übersichtUhr").hover(function(){
        $("#boxUhr").css("visibility", "visible");
    }, function() {
        $("#boxUhr").css("visibility", "hidden");
    });

    $(".übersichtPartner").hover(function(){
        $("#boxPartner").css("visibility", "visible");
    }, function() {
        $("#boxPartner").css("visibility", "hidden");
    });

    $(".übersichtBill").hover(function(){
        $("#boxBill").css("visibility", "visible");
    }, function() {
        $("#boxBill").css("visibility", "hidden");
    });

    $(".übersichtKiste").hover(function(){
        $("#boxKiste").css("visibility", "visible");
    }, function() {
        $("#boxKiste").css("visibility", "hidden");
    });

    $(".übersichtMoney").hover(function(){
        $("#boxMoney").css("visibility", "visible");
    }, function() {
        $("#boxMoney").css("visibility", "hidden");
    });

    // Wertschöpfungskette

    $(".mittler").hover(function(){
        $("#boxMittler").css("visibility", "visible");
    }, function() {
        $("#boxMittler").css("visibility", "hidden");
    });


    // Smiley
    $("#zeitstrahl, #smiley").hover(function(){
        $("#smiley").css("visibility", "visible");
    }, function() {
        $("#smiley").css("visibility", "hidden");
    });

    //Gründer
    $(".jenny img, #boxJenny").hover(function(){
        $("#boxJenny, .jenny .email").css("visibility", "visible");
    }, function() {
        $("#boxJenny, .jenny .email").css("visibility", "hidden");
    });
    $(".paddi img, #boxPaddi").hover(function(){
        $("#boxPaddi, .paddi .email").css("visibility", "visible");
    }, function() {
        $("#boxPaddi, .paddi .email").css("visibility", "hidden");
    });

    $("#emailSymbolJ").hover(function(){
        $(".jenny .email").css("visibility", "visible");
    }, function() {
        $(".jenny .email").css("visibility", "hidden");
    });
    $("#emailSymbolP").hover(function(){
        $(".paddi .email").css("visibility", "visible");
    }, function() {
        $(".paddi .email").css("visibility", "hidden");
    });


    // Preise
    $("#preisStarter").hover(function(){
        $("#boxStarter").css("visibility", "visible");
    }, function() {
        $("#boxStarter").css("visibility", "hidden");
    });

    $("#preisBasic").hover(function(){
        $("#boxBasic").css("visibility", "visible");
    }, function() {
        $("#boxBasic").css("visibility", "hidden");
    });

    $("#preisPro").hover(function(){
        $("#boxPro").css("visibility", "visible");
    }, function() {
        $("#boxPro").css("visibility", "hidden");
    });



});









//---------------Übung----------------------

//get access to the button and set up a click event handler
var button = document.getElementById("submit");
button.onclick = changeGreeting;

function changeGreeting(){
    var greeting = document.getElementsByTagName("h1")[0];
    var input = document.getElementById("customer-amount").value;
    greeting.innerHTML = "Hello " + input;
}


$(document).on('ready', function() {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});