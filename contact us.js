
window.addEventListener('load', function () {
    //getting inputs
    usertxt = document.getElementById('usertxt');
    useremail = document.getElementById('useremail');
    usertxt.focus();

    // getting spans
    usernameerror = document.getElementById('usernameerror');
    useremailerror = document.getElementById('useremailerror');
    //when become blur on username 
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
    //when become blur on usremail
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
    ////when click submit
    document.forms[0].addEventListener('submit', function (data) {
        if (!(isuseremailvalide() && isusernamevalide())) {
            if (!isuseremailvalide()) {
                useremailerror.style.display = 'block';
                useremail.classList.add("error");
            }
            if (!isusernamevalide()) {
                usernameerror.style.display = 'block';
                usertxt.classList.add("error");
            }

            data.preventDefault();
        }
        sendEmail();
        alert("Massege sent");
    });

});

function isusernamevalide() {
    var usernamepattern = /^[A-Za-z]{3,10}$/;
    return usertxt.value.match(usernamepattern);
}

function isuseremailvalide(p) {
    return useremail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
}

//sending massage

function sendEmail(params) {

    var tempparams={
        from_name:document.getElementById('usertxt').value,
        to_name:document.getElementById('useremail').value,
        message:document.getElementById('msg').value
    };
     emailjs.send('service_uyw6qhb','template_ud2ps8r',tempparams)
    .then(function(res){
        console.log("success",res.status);
    })
}