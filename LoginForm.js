var verifyUsername = function (e) {
    e.preventDefault();
    var username;
    username = document.getElementById("username").value;

    var tekstReg = /^[a-zA-Z0-9]+$/
    var lblEl = document.getElementById("u-error");

    if (username != "") {

        if (tekstReg.test(username)) {
            lblEl.textContent = "";
        }
        else {
            lblEl.textContent = "Username invalid";
        }

    }
    else {
       lblEl.textContent = "Username invalid";
        lblEl.style.color="red";
    }
}



function verifyPass(e) {
    e.preventDefault();
    var password;
    password = document.getElementById("password").value;

    var lblEl =document.getElementById("p-error");
        if (password.length > 8) {
            lblEl.textContent = "";
        }
        else {
            lblEl.textContent = "Password invalid";
            lblEl.style.color="red";
        }
}

document.getElementById('myForm').addEventListener("submit",function(e){
    verifyUsername(e);
    verifyPass(e);
});