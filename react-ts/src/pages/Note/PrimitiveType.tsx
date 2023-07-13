// NOTE: 기본 타입

//* 타입: 그 value가 가지고 있는 프로퍼티나 함수를 추론할 수 있는 방법
//* "Lee" => 이것은 value인데 문자열이 가지는 프로퍼티, 메소드를 가지고 있는 value이다!
//* Property: string.length는 문자열의 속성인 문자열의 길이를 제공한다. 문자열 자체에는 아무것도 하지 않는다.
"string".length;
//* Method: string.toLowerCase()는 문자열을 소문자로 변환한다. 즉, 문자열에 작업을 수행한 다음 반환한다.
"string".toLowerCase();

// NOTE: string
let name: string = "Lee";

// NOTE: number
let num: number = 12;

// NOTE: boolean
let isPrime: boolean = true;

// NOTE: undefined - 초기화되지 않은 변수의 기본값, 값이 있는지 없는지 결정 X
// 변수에 직접 undefined타입을 주는 것은 좋지않다. 보통 유니언 타입을 이용해 정의한다.
// 변수의 타입이 number|undefined 이면 변수에 undefined또는 number값을 할당할 수 있는 것이다.
// 함수의 return 값으로도 undefined를 유니온 타입으로 정의할 수 있다.
let id: undefined;
let pw: number | undefined;
pw = undefined;
pw = 123;

function login(): number | undefined {
  return undefined;
}

// NOTE: null - undefined와 달리 null은 값이 없음으로 결정된 상태
// 직접 null타입을 선언하는 것은 좋지않다. undefined와 마찬가지로 주로 유니온 타입을 이용해 나타낸다.
// 변수에 strung|null 타입이 선언된 경우, 그 변수엔 string값이 할당되거나 할당되는 값이 없을 수 있다는 뜻
let animal: null;
let pet: string | null;
pet = null;
// pet = 5; // error

// NOTE: symbol - 고유한 상수 값

export {};
