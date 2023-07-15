// NOTE:Generic
// 제네릭은 클래스, 함수, 인터페이스 등에서 한 가지 함수가 다양한 타입의 데이터를
// 받아줘야할 때 올바른 타입을 지정하기 위해 사용하는 재사용 가능한 확장 문법

function getSize(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}

const arr = [1, 2, 3];

getSize(arr); // 3

const arr2 = ["a", "b", "c"];

getSize(arr2); // 3

const arr3 = [true, false, true];
getSize(arr3); // 3

// 위와 같이 한가지 함수에서 다양한 타입의 데이터를 받아줘야한다고 가정할 때
// 올바른 타입을 지정하기 위해서는 타입을 확장시켜줘야 한다.

// 이런 상황에서 제네릭을 사용하여 함수의 매개변수에 대한
// 타입 `<T>`를 명시해줌으로써 다양한 타입에 대응하는 함수를 만들어줄 수 있다.

function getSize2<T>(arr: T[]): number {
  return arr.length;
}

const arr4 = [1, 2, 3];

getSize2<number>(arr4); // 3

const arr5 = ["a", "b", "c"];

getSize2<string>(arr5); // 3


// NOTE: Generic 타입 제한하기 (constraints)
// extends 문법을 쓰면 넣을 수 있는 타입을 제한할 수 있다.
// interface에서 쓰는 extends는 복사
// Generic에서 쓰는 extends는 number와 비슷한 속성을 가지고 있는지 if 문으로 체크하는 것
function func<MyType extends number>(x: MyType) {
  return x - 1
}

let a = func<number>(100)

// 커스텀 타입도 extends 가능하다.
interface lengthCheck {
  length : number
}
function 함수<MyType extends lengthCheck>(x: MyType) {
  return x.length
}

let x = 함수<string>('hello')  //가능
let x2 = 함수<number>(1234) // error: Type 'number' does not satisfy the constraint 'lengthCheck'.

export {};
