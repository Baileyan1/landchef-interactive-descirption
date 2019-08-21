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
    $("#boxJenny").hover(
      function() {
        $("#jennyText, .jenny .email").css("visibility", "visible");
      },
      function() {
        $("#jennyText, .jenny .email").css("visibility", "hidden");
      }
    );
    $("#boxPaddi").hover(
      function() {
        $("#paddiText, .paddi .email").css("visibility", "visible");
      },
      function() {
        $("#paddiText, .paddi .email").css("visibility", "hidden");
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



    $(document).ready(function(){
      $("#boxJenny, #boxPaddi").hover(function() {
          $(this).animate({ 
              height:"+=172px",
              marginTop:"-=172px"}, 200);},
      function() {
          $(this).animate({ 
              height:"-=172px",
              marginTop:"+=172px"}, 500);
         });
  });

  });
}
