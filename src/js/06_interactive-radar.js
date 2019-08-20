function radar() {
  $(document).ready(() => {
    const pins = $("#locations .location");

    $("#choose .option").on("click", function() {
      $(pins).removeClass("active");
      const data = $(this).attr("data-option");

      $(`#locations .location[data-${data}="true"]`).addClass("active");
    });
  });
}
