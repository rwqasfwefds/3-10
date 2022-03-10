function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog('흰색', '마루', 1);
let hisDog = new Dog('흰색', '마루', 1);
document.write((myDog == hisDog) + '<br>');
document.write((myDog === hisDog) + '<br>');

let herDog = hisDog;
document.write((hisDog == herDog) + '<br>');
document.write((hisDog === herDog) + '<br>');