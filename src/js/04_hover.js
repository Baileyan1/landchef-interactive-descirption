// Prozess Abildung

$(document).ready(function() {
  $(".übersichtVerpackung").hover(
    function() {
      $("#boxVerpackung").css("visibility", "visible");
    },
    function() {
      $("#boxVerpackung").css("visibility", "hidden");
    }
  );

  $(".übersichtApp").hover(
    function() {
      $("#boxApp").css("visibility", "visible");
    },
    function() {
      $("#boxApp").css("visibility", "hidden");
    }
  );

  $(".übersichtEinkaufswagen").hover(
    function() {
      $("#boxEinkaufswagen").css("visibility", "visible");
    },
    function() {
      $("#boxEinkaufswagen").css("visibility", "hidden");
    }
  );

  $(".übersichtLieferung").hover(
    function() {
      $("#boxLieferung").css("visibility", "visible");
    },
    function() {
      $("#boxLieferung").css("visibility", "hidden");
    }
  );

  $(".übersichtUhr").hover(
    function() {
      $("#boxUhr").css("visibility", "visible");
    },
    function() {
      $("#boxUhr").css("visibility", "hidden");
    }
  );

  $(".übersichtPartner").hover(
    function() {
      $("#boxPartner").css("visibility", "visible");
    },
    function() {
      $("#boxPartner").css("visibility", "hidden");
    }
  );

  $(".übersichtBill").hover(
    function() {
      $("#boxBill").css("visibility", "visible");
    },
    function() {
      $("#boxBill").css("visibility", "hidden");
    }
  );

  $(".übersichtKiste").hover(
    function() {
      $("#boxKiste").css("visibility", "visible");
    },
    function() {
      $("#boxKiste").css("visibility", "hidden");
    }
  );

  $(".übersichtMoney").hover(
    function() {
      $("#boxMoney").css("visibility", "visible");
    },
    function() {
      $("#boxMoney").css("visibility", "hidden");
    }
  );

  // Wertschöpfungskette

  $(".mittler").hover(
    function() {
      $("#boxMittler").css("visibility", "visible");
    },
    function() {
      $("#boxMittler").css("visibility", "hidden");
    }
  );

  // Smiley
  $("#zeitstrahl, #smiley").hover(
    function() {
      $("#smiley").css("visibility", "visible");
    },
    function() {
      $("#smiley").css("visibility", "hidden");
    }
  );

  //Gründer
  $(".jenny img, #boxJenny").hover(
    function() {
      $("#boxJenny, .jenny .email").css("visibility", "visible");
    },
    function() {
      $("#boxJenny, .jenny .email").css("visibility", "hidden");
    }
  );
  $(".paddi img, #boxPaddi").hover(
    function() {
      $("#boxPaddi, .paddi .email").css("visibility", "visible");
    },
    function() {
      $("#boxPaddi, .paddi .email").css("visibility", "hidden");
    }
  );

  $("#emailSymbolJ").hover(
    function() {
      $(".jenny .email").css("visibility", "visible");
    },
    function() {
      $(".jenny .email").css("visibility", "hidden");
    }
  );
  $("#emailSymbolP").hover(
    function() {
      $(".paddi .email").css("visibility", "visible");
    },
    function() {
      $(".paddi .email").css("visibility", "hidden");
    }
  );

  // Preise
  $("#preisStarter").hover(
    function() {
      $("#boxStarter").css("visibility", "visible");
    },
    function() {
      $("#boxStarter").css("visibility", "hidden");
    }
  );

  $("#preisBasic").hover(
    function() {
      $("#boxBasic").css("visibility", "visible");
    },
    function() {
      $("#boxBasic").css("visibility", "hidden");
    }
  );

  $("#preisPro").hover(
    function() {
      $("#boxPro").css("visibility", "visible");
    },
    function() {
      $("#boxPro").css("visibility", "hidden");
    }
  );
});
