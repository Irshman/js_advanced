var text = document.querySelector(".text").innerHTML;
var answerDiv = document.querySelector(".answer");

var regIndx = /\d{5}/g;
var regData = /\d{1,2}\/\d{1,2}\/\d{4}/g;
var regIp = /\d{3}.\d{3}.\d{3}.\d{3}/g;     // /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/g - захвативает дату
var regDolar = /\$[0-9,]+(\.[0-9]{2})?/g; // /\$[0-9]+\.?[0-9]/g


var resultIndex = text.match(regIndx);
console.log("В тексте есть такие індекси (з 5 цифр):");
console.log(resultIndex)

var resultIp = text.match(regIp);
console.log("В тексте есть такие IP:");
console.log(resultIp)

var resultDolar = text.match(regDolar);
console.log("В тексте есть такие цени в доларах:");
console.log(resultDolar);

var resultData = text.match(regData);
console.log("В тексте есть такие дати:");
console.log(resultData);



// task 2


function randomColor() {
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}


var divArr = document.querySelectorAll(".greenDiv");

for (var i = 0; i < divArr.length; i++) {
    divArr[i].onmouseover = function () {
        this.style.backgroundColor = randomColor();
        this.style.fontSize = "20px"
        this.innerHTML = color; 
    }
}

function setHandler() {
    window.onbeforeunload = function() { 
        return "Данные не сохранены. Иформация будет утеряна";
    };
};


