// Task 1

var link = document.querySelector(".link"),
    textDiv = document.querySelector(".divText"),
    btn = document.querySelector(".deleteEvent");

    link.addEventListener('click', showHideDiv);
    btn.addEventListener('click', deleteEvent)

    function showHideDiv(e) {
        textDiv.classList.toggle("show-hide");
        e.preventDefault();
    }

    function deleteEvent() {
        link.removeEventListener("click", showHideDiv);
    }

// Task 2
// 1)

var items = document.querySelectorAll(".item");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', deleteElement);
}

function deleteElement() {
    this.remove();
}

// 2)

var mainDiv = document.getElementById("main-div");
var helpDiv = document.createElement('div');
helpDiv.classList.add('helpDiv')
mainDiv.addEventListener('mouseover', function(e) {
    var target = e && e.target || window.event.srcElement;
    var dataToggleId = target.getAttribute('data-tooltip');
    if (!dataToggleId) {
        return
    };    
    mainDiv.appendChild(helpDiv).innerText = dataToggleId;
});

mainDiv.addEventListener('mouseout', function(e) {
    var target = e && e.target || window.event.srcElement;
    var dataToggleId = target.getAttribute('data-tooltip');
    if (!dataToggleId) {
        return
    };
    mainDiv.removeChild(helpDiv);
});
