//validation for log-in form
/*function validateLogInForm() {
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
    */
  /*  //check email if they have @ or .
    var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.forms["logInForm"]["email"].value;
    if (!(emailFormat.test(email))) {
        alert(email +" format is wrong.");
        return false;
    }

}*/
function validatePassword() {
    var input=document.getElementById("password");
    var lowerCase=document.getElementById("lowerCase");
    var upperCase=document.getElementById("upperCase");
    var number=document.getElementById("number");
    var length=document.getElementById("length");
    //Onfocus: Displace message box when user click on passworkd id
    document.getElementById("message").style.display = "block";
    //Onblur: Hide message box
    input.onblur=function(){
        document.getElementById("message").style.display="none";
    }
    // When the user starts to type something inside the password field
    input.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(input.value.match(lowerCaseLetters)) {  
        lowerCase.classList.remove("invalid");
        lowerCase.classList.add("valid");
    } else {
        lowerCase.classList.remove("valid");
        lowerCase.classList.add("invalid");
    }
    // Validate upperCase letters
    var upperCaseLetters = /[A-Z]/g;
    if(input.value.match(upperCaseLetters)) {  
        upperCase.classList.remove("invalid");
        upperCase.classList.add("valid");
    } else {
        upperCase.classList.remove("valid");
        upperCase.classList.add("invalid");
    }
    // validation for number
    var numberFormat=/[0-9]/g;
    if(input.value.match(numberFormat)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
      // Validate length
  if(input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
}

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function passwordMatch(){
    document.getElementById("message1").style.display = "block";
    //Onblur: Hide message box
    input.onblur=function(){
        document.getElementById("message1").style.display="none";
    var password=document.getElementById("password");
    var confirmPassword=document.getElementById("confirm-password");
    var match=document.getElementById("pswMacth");
    if(password.value===confirmPassword.value){
        match.classList.remove("invalid");
        match.classList.add("valid");
    } else {
        match.classList.remove("valid");
        match.classList.add("invalid");
    }
}
}

// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }