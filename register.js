
function register()
       {
           event.preventDefault();
           var Name = document.getElementById("username").value;
           var email= document.getElementById("email").value;
           var password = document.getElementById("password").value;     
           
       var userObj={"username":Name, "email":email, "password":password };
       var usersr=JSON.parse(localStorage.getItem("USERS")) || [];
       if(!usersr.some(user=>user.email===userObj.email)){
        usersr.push(userObj);
        localStorage.setItem("USERS",JSON.stringify(usersr));
           location.reload();
          console.log(userObj);
          alert("continue login ");
    }
    else{
        alert("user already exists try registering with different credentials");
    }
       var registerserviceObj= new registerservice();
       registerserviceObj.register(userObj);
       }

      