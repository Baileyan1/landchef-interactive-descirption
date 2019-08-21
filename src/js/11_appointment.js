function appointment() {
  $(document).ready(() => {
    const today = new Date().getDay();
    $(`#appointment .slot.day[data-day="${today}"]`).addClass("today");

    $("#appointment #btn-call").on("click", function() {});

    $("#appointment #btn-choose-appointment").on("click", function() {
      $("#appointment-step-1").slideUp();
      $("#appointment-step-2").slideDown();
    });

    const dates = $("#appointment .available");
    dates.on("click", function() {
      dates.removeClass("active");
      $(this).addClass("active");
      $("#appointment #btn-make-appointment").removeClass("disabled");
    });

    $("#appointment #btn-make-appointment").on("click", function() {
      if (!$(this).hasClass("disabled")) {
        $("#appointment-step-2").slideUp();
        $("#appointment-step-3").slideDown();
      }
    });
  });
}
