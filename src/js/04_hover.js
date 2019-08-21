// Prozess Abildung

function hover() {
  $(document).ready(function() {

    // Smiley
    $("#timeline, #smiley").hover(
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
  });
}
