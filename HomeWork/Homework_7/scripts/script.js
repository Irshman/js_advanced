var enterDate = new Date();
var d = new Date(2015, 11, 15);

function getDate(someDate) {
    let numberDay = someDate.getDay();
    
    switch(numberDay) {
        case 0: console.log(7);
        break;
        default: console.log(numberDay);
    }
}

getDate(enterDate);
getDate(d);

// Task 2 
// Slide 1 nasled...

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        return `${this.name} умеет ходить`;
    }

    eat() {
        return `${this.name} принимает пищу`;
    }

    drink() {
        return `${this.name} любит пить`;
    }
}

class Soldier extends Human {
    constructor(name, age) {
        super(name, age)
    }

    shoot() {
        return `Стреляет(Пих Пах)`;
    }
}

class Doctor extends Human {
    constructor(name, age) {
        super(name, age)
    }

    cure() {
        return `Лечит`;
    }
}

// Slide 2 polimorfizm

class Dentist extends Doctor {
    constructor(name, age) {
        super(name, age)
    }
    cure() {
        return `Лечит зуби`;
    }
}

class Surgeon extends Doctor {
    constructor(name, age) {
        super(name, age)
    }
    cure() {
        return `Делает операции`;
    }
}

var napoleon = new Soldier("Наполеон Бонапарт", "51");
var hermit = new Doctor("Богомолець Александр", "65");
var oralB = new Dentist("Дантист", "39");
var surg = new Surgeon("Хирург", "39");