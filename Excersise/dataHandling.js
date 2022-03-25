function verifyEmri(e) {
    e.preventDefault();
    var emriEl;
    emriEl = document.getElementById("name").value;

    var lblEl = document.getElementById("name-error");

    if (emriEl != "") {
        lblEl.textContent = "";
    }
    else {
        lblEl.textContent = "Emri invalid";
        lblEl.style.color = "red";
    }
}

function verifyMbiemri(e) {
    e.preventDefault();
    var mbiemriEl;
    mbiemriEl = document.getElementById("mbiemri").value;

    var lblEl = document.getElementById("mbiemri-error");

    if (mbiemriEl != "") {
        lblEl.textContent = "";
    }
    else {
        lblEl.textContent = "Mbiemri invalid";
        lblEl.style.color = "red";
    }
}

var verifyUsername = function (e) {
    e.preventDefault();
    var username;
    username = document.getElementById("username").value;

    var lblEl = document.getElementById("username-error");

    if (username != "") {
        lblEl.textContent = "";
    }
    else {
        lblEl.textContent = "Username invalid";
        lblEl.style.color = "red";
    }
}

var verifyEmail = function (e) {
    e.preventDefault();
    var email;
    email = document.getElementById("email").value;

    var tekstReg = /^\S+@\S+\.\S+$/;

    var lblEl = document.getElementById("email-error");

    if (email != "") {

        if (tekstReg.test(email)) {
            lblEl.textContent = "";
        }
        else {
            lblEl.textContent = "Email invalid";
        }

    }
    else {
        lblEl.textContent = "Email invalid";
        lblEl.style.color = "red";
    }
}

var verifyPhone = function (e) {
    e.preventDefault();
    var phone;
    phone = document.getElementById("phone").value;

    var lblEl = document.getElementById("phone-error");

    if (phone != "") {
        lblEl.textContent = "";
    }
    else {
        lblEl.textContent = "Phone invalid";
        lblEl.style.color = "red";
    }
}

var verifyUsername = function (e) {
    e.preventDefault();
    var date;
    date = document.getElementById("date").value;

    var lblEl = document.getElementById("date-error");

    if (date != "") {
        lblEl.textContent = "";
    }
    else {
        lblEl.textContent = "Data E Lindjes invalid";
        lblEl.style.color = "red";
    }
}

var verifyPass = function (e) {
    e.preventDefault();
    var pass;
    pass = document.getElementById("password").value;

    var tekstReg = /^[A-Z]+$/
    var lblEl = document.getElementById("pass-error");

    if ((pass.length > 8) && (tekstReg.test(pass.charAt(0)))) {

        lblEl.textContent = "";
    }
    else {
        lblEl.textContent = "Password invalid";
        lblEl.style.color = "red";
    }
}

document.getElementById('form').addEventListener("submit", function (e) {
    verifyEmri(e);
    verifyMbiemri(e);
    verifyUsername(e);
    verifyEmail(e);
    verifyPhone(e);
    verifyPass(e);
});




