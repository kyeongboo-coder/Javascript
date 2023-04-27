for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for in문 추천 IE에서도 사용 가능

// 객체랑 배열 순회할 때 사용해주기
let arr1 = [10, 20, 30, 40, 50];
let obj1 = { one: 10, two: 20 };
// for in문은 index값 가져오는 것임
for (const i in arr1) {
  console.log(arr1[i]); 
  // i가 index를 가져온다(문자열로 나온다) ? 배열안에는 문자열만 들어갈 수 있나요? "문자열", 숫자, (객체) 등을 넣을 수  있습니다.
}

for (const i in obj1) {
  console.log(obj1[i]); // Key값을 가져온다.
}

for (const i in ".".repeat(10)) {
  console.log(i);
}

let arr2 = [10, 20, 30, 40, 50];
let obj2 = { one: 10, two: 20 };
// 값을 가져온다
for (const item of arr2) {
  console.log(item);
}

let s = 0;
for (const item of arr2) {
  s += item;
}

console.log(s);

for (const item of obj2) {
  // of 뒤에 순서가 있는 값이 나와야합니다.
  console.log(item);
}

for (const item of "hello world") {
  console.log(item);
}

// 다시 한번 짚고 넘어가기
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]); // 마지막 값을 확인해보세요.
  console.log(s[i] - s[i - 1]);
}

// for of로 풀수는 있는데 깔끔하지 않음

//문제
// 다음 수학 점수의 반 평균을 구하세요.

let 수학점수 = [10, 99, 89, 70, 55, 40];

//step1
수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3] / 수학점수.length;
// 수학점수까지가 반복문 이후는 반복문으로 처리할 문제가 아님 어디까지가 반복문으로 처리해야하는지 생각하고 하기

//step2 반복문으로 구현할 수 있는 부분을 빼기

let 수학점수 = [10, 99, 89, 70, 55, 40];
let s = 0;
for (let i = 0; i < 수학점수.length; i++) {
  s += 수학점수[i];
}

console.log(s / 수학점수.length);

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

***** 꼭 기억하기 

let s = 0;

for (let i = 0; i < user.length; i++) {
  s += user[i]["age"];
}

console.log(s / user.length);

let k = 0;

for (const i in user) {
  k += user[i]["age"];
}

console.log(k / user.length);

// why? for of와 for in 문에서는 const가 가능한가요?
// 증감식이 있기 때문에 let을 쓰는게 맞는구나 정도로만 알면됨 const를 쓰면 안돼는건 아니지만 가급적 let을 쓰기

// 
let s = 0;
for (const i of user) {
  s += i.age;
}
//to.Fixed() : Number 객체에 주어진 digits 만큼의 소수점 이하 자리수를 정확하게 갖는 문자열 표현으로 반환됩니다. 
console.log((s / user.length).toFixed(2));

///

!true // false
!false // true
!!10 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false


/// 외우세요
https://velog.io/@jessiii/for%EB%AC%B8-console.logi-%EB%A7%88%EC%A7%80%EB%A7%89%EC%97%90-undefined-%EC%B6%9C%EB%A0%A5%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-undefined-%EC%95%88%EB%82%98%EC%98%A4%EB%8A%94-%EB%B2%95
//return을 적지 않는다면 마지막 값이 undefined임 

user.map(v => v.age) // [31,32,39,undefined] / 
    .filter(v => !!v) // [31,32,39]
    .reduce((a,b)=> a+b,0) // 102