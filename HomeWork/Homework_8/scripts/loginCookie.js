const input = document.querySelector('[type="text"]');
const button = document.querySelector('[type="button"]');
const form = document.querySelector('.login');
const userStr = document.querySelector('.user-str');
const out = document.querySelector('.out');

function findCookieValue(cookieName) {
    var allcookies = document.cookie; 
    var pos = allcookies.indexOf(cookieName + "="); 

    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start); 

        if (end == -1) {
            end = allcookies.length;
        } 

        var value = allcookies.substring(start, end);
        return decodeURIComponent(value);
    }
};

let user = "admin";
document.cookie = "user=" + user;
let user2 = "Admin";
document.cookie = "user2=" + user2;

button.addEventListener('click', loginHandler);
out.addEventListener('click', outHandler);

function loginHandler() {
    if(findCookieValue("user") === input.value) {
        form.style.display = 'none';
        userStr.style.display = 'block';
        userStr.children[0].innerHTML = `Пользоваетль  ${user}`;
    } else if (findCookieValue("user2") === input.value) {
        form.style.display = 'none';
        userStr.style.display = 'block';
        userStr.children[0].innerHTML = `Пользоваетль  ${user2}`;
    } else {
        alert("Такого пользователя не существует.")
    }
}

function outHandler() {
    form.style.display = 'flex';
    userStr.style.display = 'none';
}