// let arr = [1, true, 'JavaScript'];
// function printArr(value,index,arry){
//     document.write("arr[" + index + "] = " + value + '<br>');
// }
// arr.forEach(printArr);

// 터미널
let arr = [1, true, 'JavaScript'];
function printArr(value,index,arry){
    console.log("arr[" + index + "] = " + value + '<br>');
}
arr.forEach(printArr);

// 이렇게도 쓰임
// let arr = [1, true, 'JavaScript'];
// arr.forEach(function (value,index,arry){
//     console.log("arr[" + index + "] = " + value + '<br>');
// });