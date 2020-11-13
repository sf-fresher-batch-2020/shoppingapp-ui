function login(){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
        let obj = { "email" : email , "password": password };
    console.log(obj);
    let loginserviceobj= new LoginService();
     let user = loginserviceobj.login(email,password);
    
    if(user)
    {
        window.location.href="cart.html";
    }
    else
    {
        document.querySelector("#message").innerHTML = "invalid";
        alert("Invalid Credentials!");
    }
} 
