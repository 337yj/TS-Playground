// NOTE: array 자료에 붙일 수 있는 tuple type
// tuple type은 array에 붙일 수 있는 타입
// 길이 고정 & 인덱스 타입이 고정
// 여러 다른 타입으로 이루어진 배열을 안전하게 관리
// 배열 타입의 길이 조절

let pet: [string, boolean];
pet = ["dog", true];

// NOTE: Tuple 응용 : rest parameter
// rest parameter를 엄격하게 사용가능

function user(...x: [string, number]) {
  console.log(x);
}
user("kim", 123); //가능
user("kim", 123, 456); // error: Expected 2 arguments, but got 3.
user("kim", "park"); // error: Argument of type 'string' is not assignable to parameter of type 'number'.

// NOTE: tuple 안에도 옵션가능
type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10];

// ! 주의
// 옵션기호는 뒤에만 붙일 수 있다.
// 중간을 빼고 만들 수도 없고 논리적으로 이상
type Num2 = [number, number?, number]; // error: A required element cannot follow an optional element.

// NOTE: array 두개를 spread 연산자로 합치는 경우 타입지정은?
// 점 3개 spread 연산자를 사용하면 array의 괄호를 벗겨준다.
// 그럼 arr 자리에 자료 몇개가 들어올지도 모르는 상황에서 arr2 타입지정은 tuple타입으로 어떻게 해야될까?
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

// 연습

// 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정하기
let food: [string, number, boolean] = ["햄버거", 7000, true];

// 생긴 자료는 타입지정 어떻게 해야할까?
type ArrType = [string, number, ...boolean[]];
let arr3: ArrType = ["동서녹차", 4000, true, false, true, true, false, true];

// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야함
function nums(...x: [string, boolean, ...(number | string)[]]) {}
nums("a", true, 6, 3, "1", 4);

export {};
