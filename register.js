
function register()
       {
           event.preventDefault();
           var Name = document.getElementById("username").value;
           var email= document.getElementById("email id").value;
           var password = document.getElementById("password").value;     
           let genderOptions = document.getElementsByName("gender");
           let gender = null;
            for(let option of genderOptions){
            if(option.checked){
                gender = option.value;
                break;
            }
        }
       var userObj={"username":Name, "email id":email, "password":password,"gender":gender };
       var registerserviceObj= new registerservice();
       registerserviceObj.register(userObj);
       alert("registered successfully");
       window.location.href="login.html";
       }