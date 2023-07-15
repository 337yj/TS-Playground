// NOTE: declare 키워드로 재정의하기
// declare 쓰면 이미 정의된 변수나 함수를 재정의 가능
// 자바스크립트로만 작성된 외부 라이브러리들을 쓸 때 유용
// 참고: tsconfig.json 안에 allowJs 옵션을 true로 켜두면 js파일도 타입지정이 알아서 implicit 하게 된다. (리액트 같은 프로젝트에서 유용 )

// (data.js)
var a = 10;
var b = { name: "kim" };

// (index.ts)
// "a라는 변수를 이 파일에 다시 정의해달라 " 는 뜻이다.
// 그래서 자바스크립트 파일 변수를 가져다가 쓰는 경우 타입 에러 & 변수가 없다는 에러를 방지하려면 declare를 사용한다.
declare let a: number;
console.log(a + 1);

// NOTE: TS의 이상한 특징 : Ambient Module
// 타입스크립트가 제공하는 이상한 기능은 import export 없이도 타입들을 다른 파일에서 가져다쓸 수 있다는 점
// a.ts 에 있던 변수나 타입정의를 b.ts 에서도 아무런 설정없이 그냥 가져다쓸 수 있다. =>global 변수 취급
// 전역으로 쓸 수 있는 파일을 전문용어로 ambient module 이라고 칭한다.
// 타입스크립트에서 let name 이라는 이름의 변수생성이 안되는 이유를 여기서 찾을 수 있다. 어디선가 기본으로 let name 이미 쓰고있음

// (data.ts)
type Age = number;
let myAge: Age = 20;

// (index.ts)
console.log(myAge + 1); //가능
let me: myAge = 30; //가능

// 반면에 import 혹은 export 키워드가 들어간 ts 파일은 다르다.
// import / export 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고
// 거기 있는 모든 변수는 export를 해줘야 다른 파일에서 사용가능해진다.
// 그래서 타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 export 키워드를 강제로 추가하면 된다.

// (data.ts)
export {};
type Age = number;
let 나이: Age = 20;

// (index.ts)
console.log(나이 + 1); //불가능
let 철수: Age = 30; //불가능

// NOTE: declare global
// 로컬 모듈에서 갑자기 전역으로 변수를 만들고 싶을 경우
// 따로 설정 없어도 프로젝트 내의 모든 파일에서 이용가능한 타입을 만들고 싶을 경우...
// 이것도 일종의 namespace 문법인데 여기다 적은건 global 이라는 이름의 namespace에 추가된다고 보면 됨
// 그리고 global namespace는 모든 파일에서 기본적으로 이용이 가능
declare global {
  type Dog = string;
}

export {};
