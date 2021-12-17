var inputValue = document.querySelector('[type="text"]');
var testBtn = document.querySelector('[type="button"]');
var output = document.querySelector("#output");
var regExp = /\d/;
var ldsRipple = document.querySelector('.lds-ripple')

testBtn.onclick = stringTest;

function stringTest() {
    ldsRipple.style.display = "block";
    output.style.display = "none";
    setTimeout(stringVlidation, 2000) 
}

function stringVlidation() {
    output.className = "";
    // ldsRipple.classList.remove("show-preloader");
    // output.style.display = "block";

    if (inputValue.value.length === 0) {
        output.innerHTML = "String is empty";
        output.classList.add('not-ok');
    } else if (inputValue.value.search(regExp) < 0) {
        output.innerHTML = inputValue.value;
        output.classList.add('ok');
    } else {
        output.innerHTML = "There are some ...";
        output.classList.add('not-ok');
    }
}