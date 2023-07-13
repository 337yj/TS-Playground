// NOTE: Literal type
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
// 리터럴 타입은 string, number 두 가지가 있다.

// 문자열 리터럴 타입 (String Literal Types)
// 아래 코드에서 Food에서 허용한 3개의 문자열 외에 다른 문자열을 사용하게 되면 에러가 발생한다.
type Food = "rice" | "noodle" | "meat";

const myFood1: Food = "rice";
const myFood2: Food = "aaa"; // Error: Type 'aaa' is not assignable to type 'Food'.

// 숫자형 리터럴 타입 (Numeric Literal Types)
// 숫자형도 마찬가지로 허용한 숫자 외에 다른 숫자를 사용하게 되면 에러 발생
type Grade = 1 | 2 | 3;

const student1: Grade = 1;
const student2: Grade = 5;

function num(x: "num"): 1 | 0 | -1 {
  return 1;
}

// NOTE: as const 문법
var hello = {
  name: "Lee",
};

// console.log(hello.name) -> 'Lee'

function saySayHi(a: "Lee") {}
sayHi(hello.name); // Argument of type 'string' is not assignable to parameter of type '"Lee"'.

// 'Lee'이라는 타입만 들어올 수 있는 함수를 만들었다.
// 여기서 hello.name('Lee')을 함수에 입력하면 에러가 발생한다.
// 이유는 함수는 'Lee' 타입만 입력할 수 있고 hello.name의 타입 자체는 string이기 때문에 에러가 발생한다.

// 이런걸 해결하고 싶으면
// 1. object 만들 때 타입을 잘 미리 정한다.
// 2. assertion을 사용한다. (as 'Lee')
// 3. as const를 object 자료에 붙인다.

var hi = {
  name: "Lee",
} as const;

function sayHi(a: "Lee") {}
sayHi(hi.name);

// NOTE: as const의 효과
// 1. 타입을 object의 value로 바꿔준다. (타입을 'Lee'으로 바꿔준다)
// 2. object안에 있는 모든 속성을 readonly로 바꿔준다. (변경하면 에러나게)
// object를 잠그는 코드를 짜고 싶을 때 as const를 활용하면 좋을 것 같다.

export {};
