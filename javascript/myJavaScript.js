//validation for log-in form
function validateLogInForm() {
    //check for empty "text" input field
    var inp = document.getElementsByTagName('input');
    for(var i in inp){
        if(inp[i].type == "email"||inp[i].type == "password"){
            if(inp[i].value==""){
                alert(inp[i].placeholder +" is missing.");
                //inp[i].focus(); //this will erase the field
                return false;
                break;
            }
        }
    }
    
  /*  //check email if they have @ or .
    var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.forms["logInForm"]["email"].value;
    if (!(emailFormat.test(email))) {
        alert(email +" format is wrong.");
        return false;
    }

}*/