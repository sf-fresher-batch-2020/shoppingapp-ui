function loadProducts(category,range) {
    
    var url = "https://shoppingapp-mock-api.herokuapp.com/api/products";
    //var url = "products.json";
    fetch(url).then((res) => res.json()).then(res => {
        let allProducts = res;
        console.log(JSON.stringify(allProducts));
        if (category != 'All' && category != null) {
            //allProducts = allProducts.filter(obj => obj.category == category);
            allProducts = allProducts.filter(obj =>category.includes(obj.category));
        }
        if (range != 'All' && range != null) {

            allProducts = allProducts.filter(obj => obj.range == range);
        }
        displayProducts(allProducts);
    });
}


function displayProducts(products) {
    console.log(products);
    document.getElementById("app").innerHTML = `
          <h1 class="grid-container">${products.map(function (user) {
        return `
              
              <div class="product-grid">
                  <img class="image-class" src="${user.image}">
                  <h3 class="image-title">${user.title}</h3>
                  
                  <button  data-id=${user.id} class="image-addtocart" onclick="addtocart(${user.id},${user.price},'${user.title}')">Add To Cart</button>
                  <button id="button" class="image-description" data-toggle="modal" data-target="#exampleModal" onclick="viewProduct(${user.id})">Product Details</button>
              </div>
              `

    }).join('')}</h1>`
}
function viewProduct(id) {
    var url = "https://shoppingapp-mock-api.herokuapp.com/api/products/" + id;
    fetch(url).then((res) => res.json()).then(res => {
        let Product = res;
        document.querySelector('#productName').innerHTML = Product.title;
        document.querySelector('#productDetails').innerHTML = "<b>Cost: </b>" + Product.price + "</br>" + "<b>Description: </b>" + Product.description + "</br>" + "<b>Category: </b>" + Product.category;
    });
}
function addtocart(id, price, title) {
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.log("user", user);
    let item = {

        id: id,
        name: title,
        price: price,
        no: 1,
        createdBy: user.username
    };
    console.log(item);
    let items = [];
    if (JSON.parse(localStorage.getItem('items')) === null) {
        items.push(item);
        localStorage.setItem("items", (JSON.stringify(items)));
       // window.location.reload();

    }
    else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {

            if (item.id == data.id) {
                item.no = data.no + 1;
            }
            else {
                items.push(data);
            }

        });
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
       // window.location.reload();
    }
toastr.success("Item added to cart successfully");
}
window.onload = function () {
    const iconShopping = document.querySelector('#cart');
    const cartCloseBtn = document.querySelector('.fa-close');
    const cartBox = document.querySelector('.cartBox');
    console.log(iconShopping);
    console.log(cartCloseBtn);
    console.log(cartBox);
}

function displayCartItems() {
    const addtocart = document.getElementsByClassName('image-addtocart');
    let items = [];

    //data for shopping cart
    const iconShoppingspan = document.querySelector('.iconShopping span');
    console.log(iconShoppingspan);
    let no = 0;
    JSON.parse(localStorage.getItem('items')).map(data => {
        no = no + data.no;
    });

    //cart table data
    const cartBox = document.querySelector('.cartBox');
    const cartBoxTable = cartBox.querySelector('table');
    let tableData = '';
    tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>Item Price</th><th></th></tr>';
    if (JSON.parse(localStorage.getItem('items')) === null) {
        iconShoppingspan.innerHTML = 0;
        tableData += '<tr><td colspan = "5">NoItems Found</td></tr>'
    }
    else {
        let total = 0;
        let total_items = 0;
        let cart_items = JSON.parse(localStorage.getItem('items'));
        let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let myCart_items = cart_items.filter(Obj => Obj.createdBy == user.username);
        console.log("mycart_items", myCart_items);
        iconShoppingspan.innerHTML = myCart_items.length;
        myCart_items.map(data => {

            tableData += '<tr><th>' + data.id + '</th><th>' + data.name + '</th><th>' + data.no + '</th><th>' + data.price + '</th><th><a href="#" onclick = Delete(this);>Delete</a></th></tr>';
            total = total + data.no * data.price;
            total_items = total_items + data.no;
        });
        tableData += "<tr ><th colspan='2'>Total</th><th colspan='1'> " + total_items + "</th><th>Rs." + total + "</th><th></th></tr>";
    }
    cartBoxTable.innerHTML = tableData;
    const iconShopping = document.querySelector('#cart');
    const cartCloseBtn = document.querySelector('.fa-close');
    console.log(iconShopping);
    console.log(cartCloseBtn);
    console.log(cartBox);

    iconShopping.addEventListener("click", function () {
        cartBox.classList.add('active');
    });
    cartCloseBtn.addEventListener("click", function () {
        cartBox.classList.remove('active');
    });
}
function placeOrder() {
    console.log("placing an order");
    let linuser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.log("users", linuser);
    let items = JSON.parse(localStorage.getItem("items"));
    let orders = JSON.parse(localStorage.getItem("ORDERS")) || [];
    let orderObj = { items: items, createdBy: linuser.username, createdDate: new Date().toJSON(),status:"ORDERED" };
    //orders.push(orderObj);
    localStorage.removeItem("items");
    //localStorage.setItem("ORDERS", JSON.stringify(orders));
    let url = "https://shoppingapp-mock-api.herokuapp.com/api/orders/";
    //POST (url,orders);

    axios.post(url,orderObj).then (res=>{
        console.log(res);


    console.log(orders);
    document.querySelector('#ordermsg').style.display = "block";
    document.querySelector('.alert-success').style.display = "block";
    document.querySelector('#orderbtn').style.display = "none";
    document.querySelector('#clearcartitemsbtn').style.display = "none";
    document.querySelector('#cartitemstable').style.display = "none";
    document.querySelector('#cartitems').style.display = "none";
    });

}
