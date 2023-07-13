// NOTE: 추가 타입

// NOTE: union
// 변수 또는 함수 매개변수에 대해 둘 이상의 데이터 유형을 사용할 수 있다.
let abc: string | number;
abc = 123; // OK
abc = "ABC"; // OK
// abc = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
// empId = true; // Compiler Error

// NOTE: tuple
// 배열과 유사, 차이점은 지정된 타입의 순서와 고정된 길이(length)배열을 표현,
// 추가되는 아이템 또한 tuple에 명시된 타입만 사용 가능하다.

// 배열 tuple
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];
user = [1, "Steve", true, 20, "Admin"];

var users: [number, string][];
users = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

// tuple에 요소 추가
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

// NOTE: enum
// enumerated type(열거형)을 의미.
// enum은 값들의 집합을 명명하고 이를 사용하도록 만든다.
// 예제 코드에서는 PrintMedia라 불리는 집합을 기억하기 어려운 숫자 대신 친숙한 이름으로 사용하기 위해 enum을 활용했다.
// 열거된 각 PrintMedia는 별도의 값이 설정되지 않은 경우 기본적으로 0부터 시작한다.

enum PrintMedia {
  Newspaper, //0
  Newsletter, //1
  Magazine, //2
  Book, //3
}

// 아래 코드에서 mediaType 변수에 할당된 값은 3이다
// 설정된 PrintMedia 열거형 데이터의 Book 의 값이 숫자 3이기 때문
let mediaType: number = PrintMedia.Book; //  3
console.log(mediaType);

// enum 에 설정된 아이템에 값을 할당할 수도 있다.
// 값이 할당되지 않은 아이템은 이전 아이템의 값에 +1된 값이 설정된다.
enum PrintMedia {
  Newspaper2 = 1,
  Newsletter2 = 50,
  Magazine2 = 55,
  Book2, // 55 + 1
}

// enum 타입의 편리한 기능으로 숫자 값을 통해 enum 값의 멤버 이름을 도출할 수도 있다.
let type: string = PrintMedia[55]; //  'Magazine'

// 또한 어떠한 언어 코드를 정의하는 코드를 작성할 때 언어의 집합을 만들 때도 enum을 사용 할 수 있다.
export enum LanguageCode {
  korean = "ko",
  english = "en",
  japanese = "ja",
  chinese = "zh",
  spanish = "es",
}

const code: LanguageCode = LanguageCode.english;
/**
 * 이렇게 enum을 이용해서 언어 집합을 만들어주면
 * 어떠한 코드가 어떠한 나라의 언어 코드가 무엇인지 알지 못해도
 * 쉽게 코드를 작성해줄 수 있고 코드를 읽는 사람 입장에서도 가독성이 높아지게 된다.
 */
/**
 * 이렇게 보면 enum과 JS의 object를 사용하는 것과 별 차이가 없어 보인다.
 * 사실 enum은 그 자체로 객체이기도 하다.
 * 그래서 Object.keys(LanguageCode) 를 하면 실제 키 값이 배열에 담겨 나온다.
 * => ['korean', 'english']
 * Object.values(LanguageCode) 를 하면 value 값 => ['ko', 'en']
 */
// NOTE: enum과 객체의 차이점
/**
 * object 는 코드내에서 새로운 속성을 자유롭게 추가할 수 있지만,
 * enum 은 선언할 때 이후에 변경할 수 없다.
 * object 의 속성값은 JS가 허용하는 모든 타입이 올 수 있지만,
 * enum 의 속성값으로는 문자열 혹은 숫자만 허용된다.
 */

// NOTE: any
// 애플리케이션을 만들 때, 잘 알지 못하는 타입을 표현해야 할 수가 있다.
// 이 값들은 사용자로부터 받은 데이터나 서드 파티 라이브러리 같은 동적인 컨텐츠에서 올 수도 있다.
// 이 경우 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과하길 원한다.
// 이를 위해, any 타입을 사용할 수 있다.
// 하지만 이 타입을 최대한 쓰지 않는게 좋다.
// 그래서 noImplicitAny 라는 옵션을 주면 any를 썻을 때 오류가 나오게 할 수 있다.
let something: any = "Hello World!";
something = 23;
something = true;

let arr: any[] = ["John", 212, true];
arr.push("Smith");
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ]

// NOTE: void
// Java와 같은 언어와 유사하게 데이터가 없는 경우 void가 사용된다.
// 예를 들어 함수가 값을 반환하지 않으면 반환 유형으로 void를 지정할 수 있다.
// 타입이 없는 상태이며, any 와 반대의 의미를 가진다.
// 주로 함수의 리턴이 없을 때 사용한다.
function sayHi(): void {
  console.log("Hi!");
}

let speech: void = sayHi();
console.log(speech); //Output: undefined

// NOTE: never
// Never 유형은 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용
// 일반적으로 함수의 리턴 타입으로 사용된다.
// 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 리턴하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
// 이는 무한 루프(loop)에 빠지는 것과 같다.
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

// NOTE: void와 never의 차이
// void 유형은 값으로 undefined 이나 null 값을 가질 수 있으며 never 는 어떠한 값도 가질 수 없다.
// let someVoid: void = null;
// let nothingNever: never = null; // Error: Type 'null' is not assignable to type 'never'

// TypeScript에서 값을 Return하지 않는 함수는 실제로 undefined를 반환한다.
function sayHello(): void {
  console.log("Hello!");
}

let hello: void = sayHello();
console.log(hello); // undefined
// 위의 예에서 볼 수 있듯이 sayHello 함수는 반환 유형이 void인 경우에도
// 내부적으로 undefined를 반환하기 때문에 hello undefined 가 된다.
// Never 유형을 사용하는 경우 void는 Never에 할당할 수 없기 때문에
// hello:never는 컴파일 시간 오류를 발생시킨다.

// NOTE: unknown
// any와 똑같이 모든 타입을 넣을 수 있다. 타입은 그대로 unknown이다..!
let id: unknown = "kim";
id = 123;
id = undefined;
id = [];

//* unknown 타입을 다른 곳에 집어넣으려고 하면 에러가 난다.
// any는 안그럼

// let id: unknown;
// let user1: string = id;
// let user2: boolean = id;
// let user3: number = id;
// let id: unknown;
// id[0];
// id - 1;
// id.data;

//* 참고
// unknown타입인 변수를 조작하려면
// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야 한다.

export {};
