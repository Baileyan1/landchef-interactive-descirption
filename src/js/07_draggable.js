function sortable(){
    $(document).ready(() => {
      
    var el = document.getElementById('order-list');
    var sortable = Sortable.create(el);

        new Sortibal(order-list, {
            animation: 150,
            ghostClass: 'blue-background-class'
        })
  
    });
}
