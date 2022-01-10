const input = document.querySelector('[type="text"]');
const button = document.querySelector('[type="button"]');
const form = document.querySelector('.login');
const userStr = document.querySelector('.user-str');
const out = document.querySelector('.out');

let users = ["admin", "Admin", "Somebody"];
let count = 0;

window.localStorage.setItem("users", JSON.stringify(users));

button.addEventListener('click', loginHandler);
out.addEventListener('click', outHandler);

function loginHandler() {
    let users = JSON.parse(window.localStorage.users);
    users.forEach(user => {
        if(user === input.value) {
            form.style.display = 'none';
            userStr.style.display = 'block';
            userStr.children[0].innerHTML = `Пользоваетль  ${user}`;
        }
    });
}

function outHandler() {
    form.style.display = 'flex';
    userStr.style.display = 'none';
}