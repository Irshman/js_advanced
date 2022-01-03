window.addEventListener("load", pageLoaded);

function pageLoaded() {
    var conteiner = document.querySelector(".conteiner"),
    score = document.querySelector(".score"),
    gameOver = document.querySelector(".game-over"),
    duck = document.querySelector("#duck"),
    conteinerRect = conteiner.getBoundingClientRect();

    setInterval(moveTheDuck, 2000, duck);

    conteiner.addEventListener('click', shootheDuck);

    function shootheDuck(e) {
        var aimDuck = e.target.parentElement;
        console.log(aimDuck);

        if (aimDuck.id == 'duck') {
            score.innerHTML = parseInt(score.innerHTML) + 1; 
            moveTheDuck(aimDuck);
        } else if (e.target.tagName === 'BUTTON') {
            gameOver.classList.remove('visible');
        } else {
            gameOver.classList.toggle("visible");
            score.innerHTML = 0;
        }
    }

    function moveTheDuck(duck) {
        duck.style.top = getRandomInt(1, conteinerRect.height) + "px";
        duck.style.left = getRandomInt(1, conteinerRect.width) + "px";
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}