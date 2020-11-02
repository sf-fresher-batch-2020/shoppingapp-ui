function login(){
    event.preventDefault();
    let email = document.querySelector("#email id").value;
    let password = document.querySelector("#password").value;
        let obj = { "email id" : email , "password": password };
    console.log(obj);
    var loginserviceobj= new LoginService();
     loginserviceobj.login(email,password);
     var user = loginserviceobj.login(email,password);
     window.location.href="index.html";
    if(users)
    {
        window.location.href="index.html";
    }
    else
    {
        document.querySelector("#message").innerHTML = "invalid";
    }
}