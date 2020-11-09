function login(){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
        let obj = { "email" : email , "password": password };
    console.log(obj);
    var loginserviceobj= new LoginService();
     var users = loginserviceobj.login(email,password);
    
    if(users)
    {
        window.location.href=" ";
    }
    else
    {
        document.querySelector("#message").innerHTML = "invalid";
    }
} 