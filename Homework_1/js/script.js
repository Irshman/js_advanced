var list = document.querySelector(".list");
var deleteElem = document.querySelector("#deleteElem");
var input = document.getElementById("textLi");
var addLastElem = document.getElementById("addLast");
var addFirstElem = document.getElementById("addFirst");

// Удалить елемент

deleteElem.onclick = function() {
    list.lastElementChild.remove();
}

// Добавить елемент в конец

addLastElem.addEventListener('click', function() {
    if (input.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = input.value;
        document.getElementById("list").appendChild(newItem);
    }
});

// Добавить елемент в начало

addFirstElem.addEventListener('click', function() {
    if (input.value) {
        let newItem = document.createElement("li");
        let firstChild = list.firstElementChild;
        newItem.innerHTML = input.value;
        document.querySelector(".list").insertBefore(newItem, firstChild);
    }
});

// Кнопки первий елемент, последний, привидущий и следущий 

var btn = {
    first: document.getElementById('selectFirst'),
    prev: document.getElementById('selectPrev'),
    next: document.getElementById('selectNext'),
    last: document.getElementById('selectLast'),
};

var items = list.children;
var index = 0;

btn.first.addEventListener('click', function() {
    index = 0;
    updateSelection();
});

btn.last.addEventListener('click', function() {
    index = items.length - 1;
    updateSelection();
});

btn.next.addEventListener('click', function() {
    index = (index + 1) % items.length;
    updateSelection();
});

btn.prev.addEventListener('click', function() {
    index = (index + items.length - 1) % items.length; 
    updateSelection();
});


function updateSelection() {
    var active = document.querySelector('#list > li.active'); 
    
    if( active ) active.classList.remove('active');
    
    items[index].classList.add('active');
}
