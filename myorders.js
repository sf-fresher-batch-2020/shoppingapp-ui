function myOrders(){
    var orders = JSON.parse(localStorage.getItem("ORDERS"));
    let userlog = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let myorderitems = orders.filter(Obj => Obj.createdBy == userlog.username);
    console.log(orders);
    console.log(myorderitems);
     document.getElementById('tablebody').innerHTML =`<h1>${myorderitems.map(function(order) {
         //let placedItems=order.items;
         for(var i=0; i<order.items.length; i++){
             itemname = order.items[i].name;
             itemprice = order.items[i].price;
             itemid = order.items[i].id;
             console.log(itemid);
             console.log(itemname);
             console.log(itemprice);
         
        return `
        <tr>
        <td>${order.items[i].id}</td>
        <td>${itemname}</td>
        <td>${order.items[0].no}</td>
        <td>${order.createdDate}</td>
        <td>${order.createdBy}</td>
        </tr>`}
    }).join('')}</h1>`
    
}
myOrders();