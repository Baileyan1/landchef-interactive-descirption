function radar() {
  $(document).ready(() => {
    const pins = $("#locations .location");

    $("#checkboxes .checkbox").on("click", function() {
      $(pins).removeClass("active");
      const data = $(this).attr("data-product");

      $(`#locations .location[data-${data}]="true"`).addClass("active");
    });
  });
}
