/*require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
	var $ = require("jquery")(window);
});*/

$(function() {
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
  $(".philosophie h4, .philosophie img").click(function() {
    $("#tractor1").css("visibility", "visible");
    $("#tractor2, #tractor3, #tractor4,#tractor5, #tractor6, #tractor7").css(
      "visibility",
      "hidden"
    );
    $(".philosophie").css("color", "#57CF95");
    $(".abo, .service, .prozess, .community, .partner, .ui").css(
      "color",
      "#203959"
    );
    $("#textPhilosophie").css("display", "block");
    $(
      "#textPartner, #textCommunity, #textProzess, #textNutzererlebnis, #textAbo, #textService"
    ).css("display", "none");
  });
  $(".partner h4, .partner img").click(function() {
    $("#tractor1, #tractor3, #tractor4,#tractor5, #tractor6, #tractor7").css(
      "visibility",
      "hidden"
    );
    $("#tractor2").css("visibility", "visible");
    $(".abo, .service, .prozess, .community, .philosophie, .ui").css(
      "color",
      "#203959"
    );
    $(".partner").css("color", "#57CF95");
    $("#textPartner").css("display", "block");
    $(
      "#textPhilosophie, #textCommunity, #textProzess, #textNutzererlebnis, #textAbo, #textService"
    ).css("display", "none");
  });
  $(".community h4, .community img").click(function() {
    $("#tractor1, #tractor2, #tractor3, #tractor4,#tractor5, #tractor6").css(
      "visibility",
      "hidden"
    );
    $("#tractor7").css("visibility", "visible");
    $(".abo, .service, .prozess, .partner, .philosophie, .ui").css(
      "color",
      "#203959"
    );
    $(".community").css("color", "#57CF95");
    $("#textCommunity").css("display", "block");
    $(
      "#textPhilosophie, #textPartner, #textProzess, #textNutzererlebnis, #textAbo, #textService"
    ).css("display", "none");
  });
  $(".prozess h4, .prozess img").click(function() {
    $("#tractor1, #tractor2, #tractor4,#tractor5, #tractor6, #tractor7").css(
      "visibility",
      "hidden"
    );
    $("#tractor3").css("visibility", "visible");
    $(".abo, .service, .community, .partner, .philosophie, .ui").css(
      "color",
      "#203959"
    );
    $(".prozess").css("color", "#57CF95");
    $("#textProzess").css("display", "block");
    $(
      "#textPhilosophie, #textPartner, #textCommunity, #textNutzererlebnis, #textAbo, #textService"
    ).css("display", "none");
  });
  $(".ui h4, .ui img").click(function() {
    $("#tractor1, #tractor2, #tractor3, #tractor4,#tractor5, #tractor7").css(
      "visibility",
      "hidden"
    );
    $("#tractor6").css("visibility", "visible");
    $(".ui").css("color", "#57CF95");
    $(".abo, .service, .prozess, .community, .partner, .philosophie").css(
      "color",
      "#203959"
    );
    $("#textNutzererlebnis").css("display", "block");
    $(
      "#textPhilosophie, #textPartner, #textCommunity, #textProzess, #textAbo, #textService"
    ).css("display", "none");
  });
  $(".abo h4, .abo img").click(function() {
    $("#tractor1, #tractor2, #tractor3, #tractor5, #tractor6, #tractor7").css(
      "visibility",
      "hidden"
    );
    $("#tractor4").css("visibility", "visible");
    $(".abo").css("color", "#57CF95");
    $(".service, .prozess, .community, .partner, .philosophie, .ui").css(
      "color",
      "#203959"
    );
    $("#textAbo").css("display", "block");
    $(
      "#textPhilosophie, #textPartner, #textCommunity, #textProzess, #textNutzererlebnis, #textService"
    ).css("display", "none");
  });
  $(".service h4, .service img").click(function() {
    $("#tractor1, #tractor2, #tractor3, #tractor4, #tractor6, #tractor7").css(
      "visibility",
      "hidden"
    );
    $("#tractor5").css("visibility", "visible");
    $(".abo, .prozess, .community, .partner, .philosophie, .ui").css(
      "color",
      "#203959"
    );
    $(".service").css("color", "#57CF95");
    $("#textService").css("display", "block");
    $(
      "#textPhilosophie, #textPartner, #textCommunity, #textProzess, #textNutzererlebnis, #textAbo"
    ).css("display", "none");
  });
});

//---------------Übung----------------------

//get access to the button and set up a click event handler
var button = document.getElementById("submit");
button.onclick = changeGreeting;

function changeGreeting() {
  var greeting = document.getElementsByTagName("h1")[0];
  var input = document.getElementById("customer-amount").value;
  greeting.innerHTML = "Hello " + input;
}

$(document).on("ready", function() {
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true
  });
});
