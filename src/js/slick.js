// header carousel
$(document).ready(() => {
  // get slickc carousel
  const slickHeader = $("#slick-header");

  // load pages
  $("#page-container section[data-page-name]").each((index, item) => {
    const pageName = $(item).attr("data-page-name");
    $(item).load("/pages/" + pageName, () => {
      if (index != $("#page-container").attr("data-slide-first")) {
        $(item).hide();
      }

      // Everything with [data-tippy-content] becomes a tooltip
      tippy("[data-tippy-content]", {
        arrow: true,
        theme: "landchef"
      });
    });
  });

  slickHeader.slick({
    arrows: false,
    infinite: false,
    initialSlide: 1
  });

  // On before slide change
  slickHeader.on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(`#page-container section[data-page-index=${currentSlide}]`).slideUp();
    $(`#page-container section[data-page-index=${nextSlide}]`).slideDown();
  });

  // click handler
  $(".arrow.arrow-left").on("click", () => {
    slickHeader.slick("slickPrev");
  });
  $(".arrow.arrow-right").on("click", () => {
    slickHeader.slick("slickNext");
  });
});
