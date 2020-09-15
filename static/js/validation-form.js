function validation() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm-pass").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if (user == "") {
        document.getElementById("username").innerHTML = "**Enter username";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById("username").innerHTML = "**Name should not be less then 2 alphabet or more then 20 alphabet";
        return false;
    }
    if (password == "") {
        document.getElementById("pass-word").innerHTML = "** Enter password";
        return false;
    }
    if ((password.length <= 5) || (password.length > 20)) {
        document.getElementById("pass-word").innerHTML = "**password should be more then 5 character and less then 20 character";
        return false;
    }
    if (password != confirm) {
        document.getElementById("con-password").innerHTML = "**invalid password";
        return false;
    }
    if (confirm == "") {
        document.getElementById("con-password").innerHTML = "** confirm password";
        return false;
    }
    if (phone == "") {
        document.getElementById("phone-number").innerHTML = "** Enter phone number";
        return false;
    }
    if (email == "") {
        document.getElementById("email-id").innerHTML = "**Enter Email-id";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById("email-id").innerHTML = "**invalid Email";
        return false;
    }
}