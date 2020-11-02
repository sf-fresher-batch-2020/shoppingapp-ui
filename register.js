
function register()
       {
           event.preventDefault();
           var Name = document.getElementById("username").value;
           var email= document.getElementById("email").value;
           var password = document.getElementById("password").value;     
           
       var userObj={"username":Name, "email":email, "password":password };
       var registerserviceObj= new registerservice();
       registerserviceObj.register(userObj);
       alert("registered successfully");
       window.location.href="login.html";
       }