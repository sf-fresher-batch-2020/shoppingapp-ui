function myOrders() {
    //let orders = JSON.parse(localStorage.getItem("ORDERS"));
    let url = "https://shoppingapp-mock-api.herokuapp.com/api/orders/";

    axios.get(url).then(res => {
        console.log(res);
        let orders = res.data;
        let userlog = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let myorderitems = orders.filter(Obj => Obj.createdBy == userlog.username);


        //let orderedproducts = {orders:JSON.stringify(orders)};
        //console.log(orderedproducts);
        console.log(orders);
        console.log(myorderitems);
        document.getElementById('tablebody').innerHTML = `<h1>${myorderitems.map(function (order) {
            let placedItems = order.items || [];
            console.log("orders", placedItems);
            //console.log(placedItems[i].id);
            //let itemstable=JSON.stringify(placedItems);
            let itemstable = '';
            for (let item of placedItems) {
                itemstable += `<tr>

            <td> ${item.id}</td>           
            <td> ${item.name}</td>
            <td> ${item.price}</td>
            <td> ${item.no}</td></tr>`

            }
            let button = "";
            if (order.status == "ORDERED") {
                button = `<a href=# onclick="cancelOrder(${order.id})" id="deleteCart">CANCEL</a>`
            };
            return `
        <tr>
        <td>${order.id}</td>
        <td><table border=1><tr><td>${itemstable}</td></tr></table></td>
        <td>${order.createdDate}</td>
        <td>${order.createdBy}</td>
        <td>${order.status}</td>
        <td>${button}</td>
        </tr>`
        }).join('')}</h1>`
    });

}
function cancelOrder(id) {
    let obj = { id: id, status: "CANCELLED" };
    let url = "https://shoppingapp-mock-api.herokuapp.com/api/orders/" + id;
    axios.patch(url, obj).then(res => {
        myOrders();
        console.log(res);
    });

    //document.getElementById("deleteCart").innerHTML="Order Cancelled";});
}

myOrders();



/*function myOrders(){
    let orders;
    this.userService.register(orders).subscribe(res => {
    let myorderitems = orders.filter(Obj => Obj.createdBy == userlog.username);
    //let orderedproducts = {orders:JSON.stringify(orders)};
    //console.log(orderedproducts);
    console.log(orders);
    console.log(myorderitems);
    document.getElementById('tablebody').innerHTML = `<h1>${myorderitems.map(function (order) {
        let placedItems = order.items;
        //console.log(placedItems[i].id);
        //let itemstable="";
        //for (let item of placedItems){
          //  itemstable = item.price;
       // }
            return `
        <tr>
        <td>${order.id}</td>
        <td>${JSON.stringify(placedItems)}</td>
        <td>${order.createdDate}</td>
        <td>${order.createdBy}</td>
        <td><a href=# onclick="deleteCart()" id="deleteCart">DELETE</a></td>
        </tr>`
    }).join('')}</h1>`
  });
 }
 let myOrder=function myOrders(order){
    let url = this.apiUrl + "/orders";
    return this.http.post(url, order);
  }
  myOrders(myOrder);*/