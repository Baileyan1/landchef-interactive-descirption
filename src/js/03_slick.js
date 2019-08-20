// header carousel
$(document).ready(() => {
  // get slickc carousel
  const slickHeader = $("#slick-header");

  // load pages
  $("#page-container section[data-page-name]").each((index, item) => {
    const pageName = $(item).attr("data-page-name");
    $(item).load("/pages/" + pageName, () => {
      if (index != $("#page-container").attr("data-slide-first")) {
        $(item).addClass("page-hidden");
      }
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
    $(`#page-container section[data-page-index=${currentSlide}]`).toggleClass(
      "page-hidden"
    );
    $(`#page-container section[data-page-index=${nextSlide}]`).toggleClass(
      "page-hidden"
    );
  });

  // click handler
  $(".arrow.arrow-left").on("click", () => {
    slickHeader.slick("slickPrev");
  });
  $(".arrow.arrow-right").on("click", () => {
    slickHeader.slick("slickNext");
  });
});

function pictureCarousel() {
  $(document).ready(function() {
    $(".picture-carousel").slick({
      arrows: false,
      dots: true,
      adaptiveHeight: false
    });
  });
}
