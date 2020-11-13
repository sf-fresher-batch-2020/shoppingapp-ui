function register() {
       event.preventDefault();
       var Name = document.getElementById("username").value;
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;

       var userObj = { "username": Name, "email": email, "password": password };
       var usersr = JSON.parse(localStorage.getItem("USERS")) || [];
       if (!usersr.some(user => user.email === userObj.email)) {
              var registerserviceObj = new registerservice();
       registerserviceObj.register(userObj);
              
              console.log(userObj);
              alert("Registered Successfully");
              window.location.href = "login.html";
       }
       else {
              alert("user already exists try registering with different credentials");
       }
      
}
