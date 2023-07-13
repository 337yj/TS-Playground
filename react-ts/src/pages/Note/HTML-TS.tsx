// NOTE: 타입스크립트로 HTML 변경과 조작할 때 주의점

// NOTE: strictNullCheck 옵션
// 많은 환경에서 null이 들어올 경우 체크해주는 옵션을 켜고 코드 작성하기
// 변수 조작하기 전에 null인지 아닌지 캐치해낼 수 있기 때문
// 특히 html 조잘할 때 셀렉터로 찾으면 null 에러가 많이 발생함
// { // tsconfig.json
//   "compilerOptions": {
//       "target": "ES5",
//       "module": "commonjs",
//       "strictNullChecks": true
//   }
// }

//* (index.html)
// <h4 id="title">안녕하세요</h4>
// <a href="naver.com">링크</a>
// <button id="button">버튼</button>

// <script src="변환된 자바스크립트파일.js"></script>

// NOTE: HTML 찾고 변경하기
// <h4>제목을 다른 글자로 변경
let title = document.querySelector("#title");
title.innerHTML = "하잉"; // error: 'title' is possibly 'null'.
// 셀렉터로 html을 찾으면 타입이 Element|null이기 때문에 에러 발생 (html을 못찾을 경우 null)
// ==> title이라는 변수가 union type이기 때문에 if문으로 type narrowing 또는 assertion 해주면 됨

//* 해결책1. narrowing 하기
let title = document.querySelector("#title");
if (title != null) {
  title.innerHTML = "하잉";
}

//* 해결책2. instanceof를 사용해서 narrowing 하기
// 우측에 HTMLElement 입력하면 그 타입인지 체크해줌
// 권장되는 방법
let title = document.querySelector("#title");
if (title instanceof HTMLElement) {
  title.innerHTML = "하잉";
}

//* 해결책3. assertion 하기
// 권장되지 않음
let title = document.querySelector("#title") as HTMLElement;
title.innerHTML = "하잉";

//* 해결책4. optional chaining
let title = document.querySelector("#title");
if (title?.innerHTML != undefined) {
  title.innerHTML = "하잉";
}

// NOTE: a 태그의 href 속성을 바꿔보기
let link = document.querySelector("#link");
if (link instanceof HTMLElement) {
  link.href = "https://kakao.com"; // error: Property 'href' does not exist on type 'HTMLElement'.
}

// html 태그 종류별로 정확한 타입명칭이 있다.
// a 태그는 HTMLAnchorElement
// img 태그는 HTMLImageElement
// h4 태그는 HTMLHeadingElement
// 이런 정확한 타입으로 narrowing 해주셔야 html 속성 수정을 제대로할 수 있다.

let link = document.querySelector("#link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

// NOTE: 이벤트리스너 부착해보기
let button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log("안녕"); // error: 'button' is possibly 'null'.
});

// 옵셔널 체이닝으로 해결하기
let button = document.getElementById("button");
button?.addEventListener("click", function () {
  console.log("안녕");
});

// 버튼 눌러서 이미지 변경하기
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
  image.src = "change.jpg";
}

// 여러개의 html요소를 변경하기
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>

// 이 경우 타입이 NodeListOf<Element>라고 나오는데 여러개 찾으면 이런 타입이 됨
let link2 = document.querySelectorAll(".naver");

link2.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

// 일반 for 반복문을 쓸 경우 변수를 만들어줘야 매끄럽게 narrowing이 가능함
for (let i = 0; i < 3; i++) {
  let a = link2[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}

export {};
