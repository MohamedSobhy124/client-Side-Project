
window.addEventListener('load', function () {
    //getting inputs
    usertxt = document.getElementById('usertxt');
    userpass = document.getElementById('userpass');
    usertxt.focus();
    // getting spans
    usernameerror = document.getElementById('usernameerror');
    userpasserror = document.getElementById('userpasserror');

    //when blur on username
    usertxt.addEventListener('blur', function () 
    {
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
    userpass.addEventListener('blur', function () 
    {

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
     //when click submit
    document.forms[0].addEventListener('submit', function (data)
    {
        if (!(isusernamevalide() && isuserpassvalide())) {
            if (!isusernamevalide()) {
                usernameerror.style.display = 'block';
                usertxt.classList.add("error");
            }
            if (!isuserpassvalide()) {
                userpasserror.style.display = 'block';
                userpass.classList.add("error");
            }
            data.preventDefault();
        }

    });
 //when click cancle
    document.forms[0].addEventListener('reset', function (e) 
    {
        if (!confirm('Are You Sure ?')) {
            e.preventDefault();
        }

    });
    // chick from cookie if this user regester 
    document.forms[0].addEventListener('submit', function () 
    {
        var cookies = getAllCookie();
        var nameuser = cookies["userNameCookie"];
        var passuser = cookies["userpassCookie"];

        if (!(nameuser == usertxt.value && passuser == userpass.value)) {
            alert("Invalide UserName Or PassWord , If you not regestered go to regester page first ");
        }
        else {
            alert("Wellcome " + nameuser);
            

        }
    });

});
//function to get all cookie inassoitive array and split it to key and value
function getAllCookie() 
{
    var assoiativeCookie = [];
    var splitCookie = document.cookie.split(";");
    for (var i = 0; i < splitCookie.length; i++) 
    {
        assoiativeCookie[splitCookie[i].split("=")[0].trim()] = splitCookie[i].split("=")[1];
    }
    return assoiativeCookie;

}
//to chick inputs 
function isusernamevalide() 
{
    var usernamepattern = /^[A-Za-z]{3,10}$/;

    return usertxt.value.match(usernamepattern);
}

function isuserpassvalide() 
{
    return userpass.value.match(/^[0-9]{4,10}$/);
}
