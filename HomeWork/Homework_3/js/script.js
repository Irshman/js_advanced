var displayTime = document.querySelector(".time");
var start = document.querySelector('[value="Start"]');
var btnStop = document.querySelector('[value="Stop"]')
var btnReset = document.querySelector('[value="Reset"]')
var btnRevers = document.querySelector('[value="Revers start"]');


var time;
var num = 1;
var reversNum = 30;

function myTimer() {
    time = setInterval(function() {
        displayTime.innerHTML = num;
        num++;
        if (num > 30) clearInterval(time);
    }, 1000);
}

function reversTimer() {
    time = setInterval(function() {
        displayTime.innerHTML = reversNum;
        reversNum--;
        if (reversNum < 0) clearInterval(time);
    }, 1000);
}

start.onclick = myTimer;
btnStop.onclick = () => {clearInterval(time)};
btnReset.onclick = function() { 
    clearInterval(time);
    num = 0;
    reversNum = 30;
    displayTime.innerHTML = num;
};
btnRevers.onclick = reversTimer;


// Task 2

var input = document.getElementById("enterText");
var btn = document.querySelector('[value="Go"]');
var btnClear = document.querySelector('[value="Clear"]');
var div = document.getElementById('list');
var ul = document.createElement('ul');
div.appendChild(ul);

function createList() {
    if (input.value === "") {
        alert("Input is empty");
    } else {
        var str = input.value;
        var sumCharA = str.match(/a/gi).length;
        alert(`Количиство символов "а" в тексе - ${sumCharA}`);
        var myArr = str.split(" ");
        var ln = myArr.length;
        var li; 

        for (let i = 0; i < ln; i++) {
            li = document.createElement('li');
            li.innerHTML = myArr[i];
            ul.appendChild(li);
        }   

        ul.firstChild.style.textTransform = "uppercase";
        ul.lastChild.style.textTransform = "lowercase";
        var prewLastChild = ln - 2;
        ul.children[prewLastChild].style.textTransform = "lowercase";
        input.value = "";
    }
}


function clearList() {
    ul.lastChild.remove();
}

btn.onclick = createList;
btnClear.onclick = clearList; 







