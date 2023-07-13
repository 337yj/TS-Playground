// NOTE: Type Aliases (별칭)
// 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미
// 타입을 변수처럼 만들어서 쓸 수 있음

//* 변수
type AnimalType = string | number | undefined;
let myPet: AnimalType;

//* 객체
type userType = {
  name: string;
  age: number;
};

let teacher: userType = { name: "john", age: 20 };

//* 함수
// 1. 숫자 두개를 파라미터로 입력할 수 있고
// 2. 숫자를 return 하는 함수를 별칭을 지어서 사용하려면
type NumOut = (x: number, y: number) => number;

let ABC: NumOut = (x, y) => {
  return x + y;
};

//* 객체안에 함수
type userInfoType = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};
let userInfo: userInfoType = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
userInfo.plusOne(1);
userInfo.changeName();

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
console.log(cutZero("00123")); // "123"

type removeType = (x: string) => number;
let removeDash: removeType = (x) => {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
};
console.log(removeDash("-1-2-3-")); // 123

//* 콜백함수 활용
type func1Type = (a: string) => string;
type func2Type = (a: string) => number;

function myFunc(a: string, func1: func1Type, func2: func2Type) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

myFunc("010-1111-2222", cutZero, removeDash); //1011112222

// NOTE: readonly로 잠그기
// const 변수는 재할당시 에러가 나기 때문에 값이 변하는걸 미리 감지하고 차단할 수 있다.
const region = "seoul";
// region = 'busan'; //const 변수는 여기서 에러남

// 하지만 object 자료를 const에 집어넣어도 object 내부는 마음대로 변경가능함
// const 변수는 재할당만 막아줄 뿐이지 그 안에 있는 object 속성 바꾸는 것 까지 관여하지 않기 때문임
const user = {
  name: "Lee",
};
user.name = "Park"; //const 변수지만 에러안남

// object 속성을 바뀌지 않게 막고 싶으면 readonly 키워드를 사용하면 됨
type userType2 = {
  readonly name: string;
};

let user2: userType2 = {
  name: "Lee",
};

// user2.name = 'Park' //readonly라서 에러남

// NOTE: 속성 몇개가 선택사항이라면?
// 어떤 object자료는 color, width 속성이 둘다 필요하지만
// 어떤 object 자료는 color 속성이 선택사항이라면
// type alias를 여러개 만들어야하는게 아니라 물음표연산자만 추가하면 된다.
type SquareType = {
  color?: string;
  width: number;
};

let square: SquareType = {
  width: 100,
};

// NOTE: type extend

// OR 연산자를 이용해서 Union type을 만들 수도 있다.
type Name = string;
type Age = number;
type NewOne = Name | Age;

// object에 지정한 타입의 경우 합치기도 가능하다.
// & 기호를 쓴다면 object 안의 두개의 속성을 합쳐준다.
type PositionX = { x: number };
type PositionY = { y: number };
type XY = PositionX & PositionY;
let board: XY = { x: 1, y: 2 };

// NOTE: type 키워드는 재정의 불가능!
// type something = string;
// type something = number;

// NOTE: interface로 type 재정의 하기
export {};
