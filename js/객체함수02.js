function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog('흰색', '마루', 1);
myDog.family = '시베리안 허스키'; // family라는 값과 breed라는 함수가 Dog라는 객체함수 안으로 들어간다
myDog.breed = function(){
    return this.color + ' ' + this.family;
}
document.write('우리 집 강아지는 ' + myDog.breed() + ' 입니다.');

// console.log('우리 집 강아지는 ' + myDog.breed() + ' 입니다.');