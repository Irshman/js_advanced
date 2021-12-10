// Перепишите все селекторы из первой папки 001_CSS_Selectors с помощью известных Вам методов и свойств.
// В примере с классом добавьте к существующем классу, класс с именем newclass, а также выведите в консоль все стили что есть у элемента с этим классом
// В примере с индентификатором добавьте свойства marginTop с значением 10px и background с значением red


// First file 001CSS => 001_Id_And_Class...

var div = document.querySelector(".class1"); 
var title = document.querySelector("#id1"); 

title.style.backgroundColor = "red";
title.style.marginTop = "10px";

div.style.cssText = `color: blue;
                    font-size: 14px;
                    text-decoration: underline;`;

div.classList.add("newclass");
console.log(div.style);
console.log(title.style);

// Second file 001CSS => 002...

var pClass = document.querySelector(".class");
var a = document.querySelector("a");

pClass.style.color = "green";
a.style.cssText = `font-weight: bold;
                    font-style: italic;
                    text-decoration: underline;`;

pClass.style.cssText = `text-transform: uppercase;`;
a.style.cssText = `text-transform: uppercase;`;

// Three file 001CSS => 003...
var p = document.getElementsByTagName("p")[1];
var span = document.querySelectorAll("span");

p.style.color = 'brown';
span[0].style.color = "green";


//Four file 001CSS => 004...

var pYellow = document.getElementsByTagName("p")[3];
var ul = document.querySelectorAll("ul");

pYellow.style.backgroundColor = 'yellow';

for (let i = 0; i < ul.length; i++) {
    ul[i].style.backgroundColor = 'red';
}

//Five file 001CSS => 005...

var aTarg = document.querySelector("[target='_self']");
var aTargBlank = document.querySelector("[target='_blank']");
aTarg.style.backgroundColor = 'yellow';
aTargBlank.style.backgroundColor = 'red';


// Добавьте после дива с id=one еще один див с текстом two и id=two
// На клик по id=two добавьте перед ним див с id - two_first, а див с id=two измените на two_second

var divOne = document.getElementById("one");

divOne.insertAdjacentHTML("afterend", '<div id="two">two</div>');
var divTwo = document.getElementById("two");

divTwo.onclick = function(div) {
    divOne.insertAdjacentHTML("afterend", '<div id="two_first">two first</div>');
    divTwo.id = "two_second";
    divTwo.innerText = "two second";
};
