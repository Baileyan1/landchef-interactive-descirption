function dropdown() {
  $(document).ready(() => {
    $("#order .content").hide();

    $("#order .header").on("click", function() {
      $("#order .content").slideToggle();
      $("#order").toggleClass("open");
    });

    $("#order .attribute").on("click", function() {
      $(this).toggleClass("active");
      const isActive = $(this).hasClass("active");

      if (isActive) {
        $(this).text($(this).attr("data-value"));
      } else {
        $(this).text($(this).attr("data-placeholder"));
      }
    });
  });
}
