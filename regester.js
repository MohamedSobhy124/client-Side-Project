
window.addEventListener('load', function () {
    //getting inputs
    usertxt = document.getElementById('usertxt');
    userpass = document.getElementById('userpass');
    userphone = document.getElementById('userphone');
    useremail = document.getElementById('useremail');
    usertxt.focus();

    // getting spans
    usernameerror = document.getElementById('usernameerror');
    userpasserror = document.getElementById('userpasserror');
    userphoneerror = document.getElementById('userphoneerror');
    useremailerror = document.getElementById('useremailerror');
    //when blur on username
    usertxt.addEventListener('blur', function () {
        if (!isusernamevalide()) {
            usertxt.focus();
            usertxt.select();
            usernameerror.style.display = 'block';
            usertxt.classList.add("error");
        } else {
            usernameerror.style.display = 'none';
            usertxt.classList.remove("error");
        }
    });
    //when blur on userpass
    userpass.addEventListener('blur', function () {

        if (!isuserpassvalide()) {
            userpass.focus();
            userpass.select();
            userpasserror.style.display = 'block';
            userpass.classList.add("error");
        } else {
            userpasserror.style.display = 'none';
            userpass.classList.remove("error");
        }
    });
    //when blur on phone
    userphone.addEventListener('blur', function () {
        if (!isuserphonevalide()) {
            userphone.focus();
            userphone.select();
            userphoneerror.style.display = 'block';
            userphone.classList.add("error");
        } else {
            userphoneerror.style.display = 'none';
            userphone.classList.remove("error");
        }
    });
    //when blur on email
    useremail.addEventListener('blur', function () {
        if (!isuseremailvalide()) {
            useremail.focus();
            useremail.select();
            useremailerror.style.display = 'block';
            useremail.classList.add("error");
        } else {
            useremailerror.style.display = 'none';
            useremail.classList.remove("error");
        }
    });
    //when click submit
    document.forms[0].addEventListener('submit', function (data) {
        if (!(isuseremailvalide() && isusernamevalide() && isuserphonevalide() && isuserpassvalide())) {
            if (!isuseremailvalide()) {
                useremailerror.style.display = 'block';
                useremail.classList.add("error");
            }
            if (!isusernamevalide()) {
                usernameerror.style.display = 'block';
                usertxt.classList.add("error");
            }
            if (!isuserpassvalide()) {
                userpasserror.style.display = 'block';
                userpass.classList.add("error");
            }
            if (!isuserphonevalide()) {
                userphoneerror.style.display = 'block';
                userphone.classList.add("error");
            }
            data.preventDefault();
        }
    });
    //when click cancel
    document.forms[0].addEventListener('reset', function (e) {
        if (!confirm('Are You Sure ?')) {
            e.preventDefault();
        }
    });
    //seting cookies
    document.forms[0].addEventListener('submit', function (data) {
        var date = new Date()
        date.setMonth(date.getMonth() + 3)
        document.cookie = "userNameCookie=" + usertxt.value + ";expires=" + date;
        document.cookie = "userpassCookie=" + userpass.value + ";expires=" + date;
        document.cookie = "userphoneCookie=" + userphone.value + ";expires=" + date;
        document.cookie = "useremailCookie=" + useremail.value + ";expires=" + date;
    });
});

function isusernamevalide() {
    var usernamepattern = /^[A-Za-z]{3,10}$/;
    return usertxt.value.match(usernamepattern);
}
function isuserpassvalide() {
    return userpass.value.match(/^[0-9]{4,10}$/);
}
function isuserphonevalide() {
    return userphone.value.match(/^(010|011|012|015)[0-9]{8}$/);
}
function isuseremailvalide() {
    return useremail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
}