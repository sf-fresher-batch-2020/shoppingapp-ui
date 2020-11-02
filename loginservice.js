class LoginService {
    login = function(email, password){
        let loggedInUser = null;
        var usersTemp = JSON.parse(localStorage.getItem("USERS"));
        var users= usersTemp ? usersTemp: [];     
        let exists = false;   
        for(let obj of users)
        {
            if( obj.email == email  && obj.password == password)
            {
                exists=true;
                loggedInUser = obj;
                localStorage.setItem("LOGGED_IN_USER",JSON.stringify(obj));
                break;
            }
        }
        return loggedInUser;
    }


}