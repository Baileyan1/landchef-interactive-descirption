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
  const firstActive = $("#concept-reel").attr("data-first-id");

  $(`#concept-reel .text .item[data-id=${firstActive}]`).addClass("active");
  $(`#concept-reel .illustration .item[data-id=${firstActive}]`).addClass(
    "active"
  );

  $("#concept-reel .illustration .item").click(function() {
    // deactivate all
    $("#concept-reel .illustration .item").removeClass("active");
    $("#concept-reel .text .item").removeClass("active");

    // activate clicked
    $(this).addClass("active");
    const newActive = $(this).attr("data-id");
    $(`#concept-reel .text .item[data-id=${newActive}]`).addClass("active");
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
