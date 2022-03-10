let arr = [1, -2, 3, -4];
// 배열 arr의 각 요소마다 Math.abs() 함수가 호출되고 그 결과값이 배열로 저장됨.
// Math.abs()는 수학적(Math)으로 바꿀건데 절댓값(abs)으로 바꾸겠다 라는 뜻
let absoluteValues = arr.map(Math.abs);
console.log(absoluteValues);