function offers() {
  $(document).ready(() => {
    $("[data-dropdown]").each(function() {
      const content = $(this).find("[data-content]");
      const header = $(this).find("[data-display]");
      content.hide();

      header.on("click", function() {
        content.slideToggle();
      });

      content.find("[data-item]").on("click", function() {
        header.html($(this).html());
        content.slideToggle();
      });
    });
  });
}
