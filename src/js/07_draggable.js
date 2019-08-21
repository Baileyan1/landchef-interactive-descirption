function sortable() {
  $(document).ready(() => {
    var el = document.getElementById("order-list");
    var sortable = Sortable.create(el, {
      animation: 150,
      filter: "h4, .inactive",
      ghostClass: "placeholder",
      onEnd: function(/**Event*/ evt) {
        const listLength = $("#order-list .item").length;

        if (
          $("#order-list .last")
            .nextAll()
            .filter($(evt.item)).length !== 0
        ) {
          $(evt.item)
            .addClass("inactive")
            .slideUp(300, function() {
              $(evt.item).prependTo($("#order-list"));
              setTimeout(() => {
                $(evt.item)
                  .slideDown()
                  .removeClass("inactive");
              }, 10000);
            });
        }
      }
    });
  });
}
