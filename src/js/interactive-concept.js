$(document).ready(function() {
  const firstActive = $("#concept-reel").attr("data-first-id");

  $(`#concept-reel .text .item[data-id=${firstActive}]`).addClass("active");
  $(`#concept-reel .illustration .item[data-id=${firstActive}]`).addClass(
    "active"
  );

  $("#concept-reel .illustration .item").click(function() {
    // deactivate all
    $("#concept-reel .illustration .item").removeClass("active");
    $("#concept-reel .text .item").removeClass("active");

    // activate clicked
    $(this).addClass("active");
    const newActive = $(this).attr("data-id");
    $(`#concept-reel .text .item[data-id=${newActive}]`).addClass("active");
  });
});
