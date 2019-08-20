function partnerList() {
  $(document).ready(() => {
    $("#section-partners .option").on("click", function() {
      const value = $(this).attr("data-value");

      $(`#section-partners .items`).removeClass("active");
      $(`#section-partners .items[data-value="${value}"`).addClass("active");

      $("#section-partners .option").removeClass("active");
      $(this).addClass("active");
    });
  });
}
