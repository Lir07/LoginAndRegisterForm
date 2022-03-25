var verifyUsername = function (e) {
    e.preventDefault();
    var username;
    username = document.getElementById("username").value;

    var tekstReg = /^[a-zA-Z0-9]+$/

    if (username != "") {

        if (tekstReg.test(username)) {
            document.getElementById("u-error").textContent = "";
        }
        else {
            document.getElementById("u-error").textContent = "Username invalid";
        }

    }
    else {
        document.getElementById("u-error").textContent = "Username invalid";
    }
}



function verifyPass(e) {
    e.preventDefault();
    var password;
    password = document.getElementById("password").value;

        if (password.length > 8) {
            document.getElementById("p-error").textContent = "";
        }
        else {
            document.getElementById("p-error").textContent = "Password invalid";
        }
}

document.getElementById('myForm').addEventListener("submit",function(e){
    verifyUsername(e);
    verifyPass(e);
});