const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text2 = " ";

for (let i = 0; i < cars2.length; i++) {
  text2 += "<section><h2>" + cars2[i] + "<h2></section>";
}

// 좀 더 쉽게

//블록레벨
// for문에서 let을 써야만 하는 이유?
// for 문에서 let을 사용할 경우 블록 스코프 변수의 성질 때문에, for 문 내부 블록도 반복된다. 그때마다 값이 수집된다. push라는 함수가 블록{} 안에서 실행되므로, let 변수 값에 접근 가능한 것이다. 따라서 블록마다 다른 변숫값을 출력할 수 있는 것이다.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); // i는 반복문이 끝난 다음에 호출할 수 없습니다.

for (i = 0; i < 10; i++) {
  // let을 생략하시면 안됩니다. i가 전역으로 생성이 되버립니다. ?(찾아보기)
  console.log(i);
} // 10이 나옴
// 증감이 없으면 무한반복
