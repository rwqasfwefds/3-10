let x = 2;

// 0 논리 값 참:1 이상, 거짓 : 0
// 참 : 1,true 
// 거짓 : 0

// 예시) while(1&true){
// 조건 문이 걍 참이니깐 반복문 실행 하는거임
// }

// 3항 연산자
// 물음표 써서 if, else문을 쓸 수 있음 ':' 기준 조건이 참이면 앞 거짓이면 뒤
// (조건식)? 참 : 거짓;

let result = (x % 2 == 0)? '짝수' : '홀수';
// let result = x % 2 ? '홀수' : '짝수';

console.log(result)

// '*' 두개 쓰면 거듭제곱임
// 예)3**2, 3**3