function newOrder() {
  $(document).ready(() => {
    var amount = 0;
    $("#section-ordering .item").on("click", function() {
      const add = $(this).find("[data-amount]");
      add.toggleClass("active");

      const active = add.hasClass("active");

      if (active) {
        add.text(add.attr("data-amount"));
        amount += 1;
      } else {
        add.text("");
        amount -= 1;
      }

      if (amount > 0) {
        $("#section-ordering #btn-order").removeClass("disabled");
      } else {
        $("#section-ordering #btn-order").addClass("disabled");
      }
    });

    $("#section-ordering #btn-order").on("click", function() {
      $("#section-ordering .item .add.active").each((index, item) => {
        setTimeout(() => {
          $(item).trigger("click");
        }, index * 200);
      });
    });
  });
}
