// 문제
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 정답
const num = prompt("입력");
let result = "";

for (let i = 1; i < 10; i++) {
  result += i * num + " ";
}

console.log(result);

// 문제37 : 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

// 정답
const array = prompt("이름").split(" ");
let result = {};
let winner = "";

for (let index in array) {
  let val = array[index];
  console.log(array[index]);
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
  console.log(result[val]);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
