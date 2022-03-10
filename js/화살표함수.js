// 1번

// function mysum(a, b){
//     return a + b;
// }
// let result = mysum(3, 5);
// console.log(result);

// 답
// let func = (a, b) => a + b;
// console.log(func(3, 5));

// 2번

// function MyMinus(a, b){
//     return a - b;
// }
// let result = MyMinus(5, 2);
// console.log(result);

// 답
// let result = (a, b) => a - b;
// console.log(result(5, 2));

// 3번

// function MyPrint(){
//     let res = 'hello';
//     return res;
// }
// let result = MyPrint();
// console.log(result);

// let result = () => {
//     let x = 'hello';
//     return x
// }
// console.log(result());

// 4번

// function MyPrint02(param){
//     let res = param + ' world';
//     return res;
// }
// let result = MyPrint02('hello');
// console.log(result);

// let result = (param) => {
//     let res = param + ' world';
//     return res;
// }
// console.log(result('hello'));

// 5번 문제

// function MyAvg(a, b, c){
//     let res = (a + b + c) / 3;
//     return res
// }
// let result = MyAvg(1, 2, 3);
// console.log(result);

// let result = (a, b, c) => {
//     let res = (a + b + c) / 3;
//     return res
// }
// console.log(result(1, 2, 3));

// (함수)(값) : 즉시 실행 함수 (1회용)
// let result = ((a, b, c) => {
//     let res = (a + b + c) / 3;
//     return res
// })(1, 2, 3);
// console.log(result);

// 6번 문제

// function MyComSum(a, b){
//     let res = a + b**2;
//     res += ' 입니다.'
//     return res;
// }
// let result = MyComSum(2, 3);
// console.log(result);

let result = ((a, b) => {
    let res = a + b**2;
    res += ' 입니다.'
    return res;
})(2, 3);
console.log(result);