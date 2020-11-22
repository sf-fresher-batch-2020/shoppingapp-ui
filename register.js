function register() {
       event.preventDefault();
       var Name = document.getElementById("username").value;
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       var role;
       if(document.getElementById("radio1").checked){
              role = document.getElementById("radio1").value;
       }
       else{
              role = document.getElementById("radio2").value;
       }

       var userObj = { "username": Name, "email": email, "password": password, "role":role };
       var usersr = JSON.parse(localStorage.getItem("USERS")) || [];
       if (!usersr.some(user => user.email === userObj.email)) {
              var registerserviceObj = new registerservice();
       registerserviceObj.register(userObj);
              
              console.log(userObj);
              toastr.success("Registered Successfully");
              window.location.href = "login.html";
       }
       else {
              toastr.error("user already exists try registering with different credentials");
       }
      
}
