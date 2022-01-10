window.addEventListener('load', init);

function init() {
    // users [
    //     {
    //         name,
    //         email,
    //         password
    //     },
    //     {
    //         name,
    //         email,
    //         password
    //     }
    // ]

    if (!localStorage.users) {
        localStorage.setItem('users', '[]');
    }

    var logIn = document.querySelector('#log-in');
    var logInBtn = document.querySelector('#log-in [type="button"]');
    var regestration = document.querySelector('#registration');
    var regestrationBtn = document.querySelector('#registration [type="button"]');
    var account = document.querySelector("#account");
    var accountBtn = document.querySelector("#account [type='button']");

    logInBtn.addEventListener('click', logInHandler);
    regestrationBtn.addEventListener('click', regestrationHandler);
    accountBtn.addEventListener('click', accountHandler);

    function logInHandler() {
        var users = JSON.parse(localStorage.users);
        var logInEmail = document.querySelector("#log-in [type='email']");
        var logInPassword = document.querySelector("#log-in [type='password']");

        for (var u of users) {
            if (u.email === logInEmail.value && u.password === logInPassword.value) {
                showAccount(u);
                return;
            } 
        }

        showRegestrtion();
    }

    function regestrationHandler() {
        var user = new Object();
        for (var child of regestration.children) {
            if (child.type !== 'button') user[child.name] = child.value;
        }
        var users = JSON.parse(localStorage.users);
        users.push(user);
        localStorage.users = JSON.stringify(users);
        showAccount(user);
    }

    function showAccount(user) {
        regestration.style.display = 'none';
        logIn.style.display = 'none';
        account.style.display = 'flex';

        for (var child of account.children) {
            if(child.type !== 'button') {
                child.value = user[child.name];
            }
        }
    }

    function accountHandler() {
        
    }

    function showRegestrtion() {
        logIn.style.display = 'none';
        regestration.style.display = 'flex';
    }

}