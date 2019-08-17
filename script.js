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
        $(".rechteSeite h3").text("Philosophie");
        $(".rechteSeite p").text("Die landchef Philosophie beruht zum einen darauf, die Region zu stärken und Persönlichkeit und Wertschätzung unter den Menschen zu fördern. Daher ist die landchef Partnerschaft die Grundlage für das landchef Konzept. Zum anderen möchte landchef Landwirte in ihrer Arbeit unterstützten und über die Direktvermarktung Alternativen für ein sicheres Einkommen erleichtern. Dabei legt das landchef Team besonderen Wert, den Menschen stupide Arbeit abzunehmen, um Zeit für persönliche Arbeit und Beziehungen zu schenken. <br> Außerdem möchte das landchef Team als Vorbild fungieren und partnerschaftlich mit seinen eigenen Kunden umgehen. So erhält Ehrlichkeit eine besondere Bedeutung in der Gestaltung des landchef Konzepts.");
    });
    $(".partner").click(function(){
        $("#tractor1, #tractor3, #tractor4,#tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor2").css("visibility", "visible");
        $(".abo, .service, .prozess, .community, .philosophie, .ui").css("color", "#203959");
        $(".partner").css("color", "#57CF95");
        $(".rechteSeite h3").text("Partnerschaft");
        $(".rechteSeite p").text("Das landchef Konzept basiert auf Partnerschaften, um die Persönlichkeit in der Region zu fördern und einen großen Wunsch der Nutzer von landchef zu erfüllen, Nähe zum Kunden, der zuverlässig und vertrauensvoll ist. Daher bietet landchef eine Plattform auf der Partnerschaften zwischen Gastronomen und Landwirten entstehen und gefestigt werden können. Um das Ziel zu erreichen, besteht das landchef Konzept darauf, dass Erzeuger und Abnehmer zu beginn einer Partnerschaft persönlich miteinander kommunizieren. Erst nach der initialen Kontaktaufnahme wird dem Gastronom die Möglichkeit gegeben einen Landwirt als Partner anzufragen. Viele der heutigen Prozesse des Warenbezugs sind stark abstrahiert. So werden jegliche Emotionen und Bindungen untereinander weg-digitalisiert.");
    });
    $(".community").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor4,#tractor5, #tractor6").css("visibility", "hidden");
        $("#tractor7").css("visibility", "visible");
        $(".abo, .service, .prozess, .partner, .philosophie, .ui").css("color", "#203959");
        $(".community").css("color", "#57CF95");
        $(".rechteSeite h3").text("Community");
        $(".rechteSeite p").text("Als Soziales Netzwerk bietet landchef mehrere Möglichkeiten der Vernetzung. Nicht nur Gastronomen und Landwirte können sich verpartnern, sondern auch Landwirte und Gastronomen untereinander. Dies ermöglicht es den beiden Gruppen in Kontakt zu bleiben und sich auszutauschen. Besonders für Landwirte, die derzeit bereits oft untereinander vernetzt und organisiert sind, ist dies eine interessante Funktion.");
    });
    $(".prozess").click(function(){
        $("#tractor1, #tractor2, #tractor4,#tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor3").css("visibility", "visible");
        $(".abo, .service, .community, .partner, .philosophie, .ui").css("color", "#203959");
        $(".prozess").css("color", "#57CF95");
        $(".rechteSeite h3").text("Prozess");
        $(".rechteSeite p").text("Die landchef App unterstützt etablierten Direktvermarkter im Kampf mit Papierkram und Bestellorganisation. Durch eine kommunikationsorientierte Plattform werden repetitive Organisationsaufgaben vereinfacht, um mehr Platz für direkte Kommunikation und damit Nähe zum Kunden herzustellen. Darunter gehören Kontaktaufnahme zu potentiellen Partnern, individuelle Angebotserstellung sowie die Abwicklung der Bestellprozesse.");
    });
    $(".ui").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor4,#tractor5, #tractor7").css("visibility", "hidden");
        $("#tractor6").css("visibility", "visible");
        $(".ui").css("color", "#57CF95");
        $(".abo, .service, .prozess, .community, .partner, .philosophie").css("color", "#203959");
        $(".rechteSeite h3").text("Nutzererlebnis");
        $(".rechteSeite p").text("Die Kernkompetenz von landchef stützt sich auf das Nutzererlebnis, denn die App baut hauptsächlich auf einen abgerundeten und zuverlässigen Ablauf auf. Das bedeutet, Funktionalität und Benutzerfreundlichkeit haben die höchste Priorität für das Tool sowie für denjenigen, der sie verwendet. Damit du deine Aufgaben ohne Hindernisse, Probleme oder ähnliches, das dich behindern könnte, erledigen kannst.");
    });
    $(".abo").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor5, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor4").css("visibility", "visible");
        $(".service, .prozess, .community, .partner, .philosophie, .ui").css("color", "#203959");
        $(".abo").css("color", "#57CF95");
        $(".rechteSeite h3").text("Abo-Modell");
        $(".rechteSeite p").text("Die landchef App ist in einem Jahres-Abo erhältlich und bietet drei Pakete mit unterschiedlichen Leistungen an – das Starter, Basic und Pro Paket. Alle Pakete enthalten die Nutzung der landchef Community sowie das Bestelltool, welches über die Pakete unterschiedlich viele Partnerschaften und Bestellungen gewährt. Vor dem ersten Kauf der App besteht die Möglichkeit eines Probemonats, um die Funktionen der landchef App für die eigenen Zwecke zu prüfen. Ist der Monat abgelaufen, können die letzten Bestellungen noch abgeschlossen, aber keine neuen erstellt werden, oder die landchef wird abonniert.");
    });
    $(".service").click(function(){
        $("#tractor1, #tractor2, #tractor3, #tractor4, #tractor6, #tractor7").css("visibility", "hidden");
        $("#tractor5").css("visibility", "visible");
        $(".abo, .prozess, .community, .partner, .philosophie, .ui").css("color", "#203959");
        $(".service").css("color", "#57CF95");
        $(".rechteSeite h3").text("Service & Funktionalität");
        $(".rechteSeite p").text("Das Leben der Nutzer von landchef zu vereinfachen und Zeit zu sparen, gehört zur landchef Philosophie, daher ist dem landchef Team besonderen wichtig, dass die Funktionalität der App zuverlässig abläuft. Darüberhinaus wird sehr stark auf engen Kontakt zu den Nutzer geachtet, um die landchef App stetig für diese zu verbessern und an ihre Lebenssituationen entsprechend anzupassen. Außerdem steht das landchef Team bei Fragen oder Problemen gerne stets zur Verfügung.");
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
    $("#zeitstrahl").hover(function(){
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