// 객체 정의
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
// 객체 생성
let myDog = new Dog('흰색', '마루', 1);
document.write('우리 집 강아지는 ' + myDog.name + ' 라는 이름의 ' + myDog.color + ' 털이 매력적인 강아지입니다.');

// console.log('우리 집 강아지는 ' + myDog.name + ' 라는 이름의 ' + myDog.color + ' 털이 매력적인 강아지입니다.')