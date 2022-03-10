function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog('흰색', '마루', 1);
delete myDog.age;

// age 프로퍼티가 삭제되었기 때문에 undefined를 출력 함
document.write('우리 집 강아지의 나이는 ' + myDog.age + ' 입니다.');