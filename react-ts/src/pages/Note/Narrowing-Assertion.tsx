// NOTE: 타입 확정하기 Narrowing & Assertion

// type이 아직 하나로 확정되지 않았을 경우, Type Narrowing을 써야한다.
// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 narrowing 해줘야 조작가능
// 참고로 typeof는 문자열을 반환하기 때문에 'string' 이런 형식으로 써줘야한다.

// ERROR: Operator '+' cannot be applied to types 'string | number' and 'number'
// function myFunc(x :number | string){
//   return x + 1
// }

// SOLVE : Narrowing
// NOTE 1: typeof
// if문에서 typeof 변수 를 이용하여 변수가 어떤 타입인지 체크한 뒤, 연산을 수행한다.
// 함수 안에서 if문 쓸 때는 마지막에 else {} 없으면 에러남
// return 하지않는 조건문이 있다면 나중에 버그가 생길 수 있어서 에러를 내주는 것
function myFunc(x: number | string) {
  if (typeof x === "string") return x + "1";
  else {
    return x + 1;
  }
}

// 타입이 array인지 체크할 때에는 typeof 대신 Array.isArray()를 사용할 수 있다.
// 전달 받은 과목 속성의 타입이 string이면 그냥 리턴하고,
// 배열이면 마지막 원소를 리턴한다.
function homework(obj: { subject: string | string[] }): string {
  if (typeof obj.subject === "string") {
    return obj.subject;
  } else if (Array.isArray(obj.subject)) {
    return obj.subject[obj.subject.length - 1];
  } else {
    return "no subject";
  }
}

// NOTE 2: in
// 커스텀 타입을 narrowing하려면 in을 사용해야 한다.
// 아래와 같이 커스텀 타입을 사용하는 경우 typeof를 쓸 수 없다.
// typeof 연산자는 number, string, boolean, object등 기본 타입에만 사용 가능하다.

type Cat = { 야옹: string };
type Dog = { 멍멍: string };

function 함수(animal: Cat | Dog) {
  // 에러 발생
  // if (typeof animal === 'Cat') {
  //   animal.야옹;
  // }

  // 정상 작동
  if ("야옹" in animal) {
    animal.야옹;
  }
}

// NOTE 3: instanceof
// class로 생성된 instance인 경우, instanceof로 narrowing할 수 있다.
// 날짜에서 instanceof가 많이 사용된다.

let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// NOTE 4: &&을 이용한 undefined, null 체크
// undefined 체크할 때, &&을 사용하면 undefined를 체크하기 위한 if문을 줄일 수 있다.
// undefined 외에 null도 사용 가능하다.
// 그리고 조건식을 if (변수 != null) 이렇게 써도 null, undefined 이거 두 개를 동시에 거를 수 있다.
function myFunc2(a: string | undefined) {
  // a가 undefined면 실행 안됨
  // string이면 실행
  if (a && typeof a === "string") {
    console.log("a is string");
  }
}

// SOLVE : Assertion
// 만약에 이런 narrowing이 귀찮다면 assertion이라는 문법이 있다.
// type을 잠깐 덮어 씌우는걸 assertion이라고 한다. (타입 덮어쓰기 )
// 예를들어 x as number는 왼쪽에 있는 변수를 number로 덮어쓴다는 의미

// assertion의 용도를 잘 알아야 한다.
// 1. union type등을 하나로 narrowing 할 때 쓰인다. (타입을 a에서 b로 변경하는데 쓸 수 없다.)
// 2. 무슨 타입이 들어올지 확실하게 알 때 쓰자 . 왜냐하면 버그 안잡아주기 때문에
// 남의 코드 수정할때, 혹은 왜 타입에러가 나는지 모르겠을 때 쓰기

function myFunc3(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}
myFunc3(123);

// 타입을 강제로 부여하는 함수를 만들 때 활용
type Person = {
  name: string;
};

function converter<T>(data: string): T {
  return JSON.parse(data) as T;
}

const jake = converter<Person>('{"name":"kim"}');

export {};
