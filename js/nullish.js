// 병합 연산자(nullish, ppt를 보셈)

x = (a !== null && a !== undefined) ? a : b
// ->

x = (a ?? b)