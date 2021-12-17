window.onload = function() {
    var screen = document.querySelector("#screen");
    var inputs = document.querySelectorAll("input");
    var backspace = document.querySelector("#backspace");
    var eqval = document.querySelector("#eqval");


    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = inputHandler;
    }

    function inputHandler() {
        if (this.value === "C") {
            screen.innerHTML = "";
        } else if (this.id === "backspace") {
            screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
        } 
    }
}

