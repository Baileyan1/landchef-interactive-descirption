function sortable() {
  $(document).ready(() => {
    var el = document.getElementById("order-list");
    var sortable = Sortable.create(el, {
      animation: 150,
      filter: "h4",
      ghostClass: "placeholder"
    });
  });
}
