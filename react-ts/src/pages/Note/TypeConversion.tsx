// NOTE: object를 다른 타입으로 변환하고 싶을 때
// 모든 속성들에 문자가 들어오는 타입을 갑자기 숫자가 들어오도록 바꾸고 싶을 때
// 처음부터 타입을 다시 작성하는 것이 아니라 mapping을 이용하면된다.

// NOTE: keyof 연산자
// keyof 연산자는 object 타입에 사용하면
// object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내준다.
// object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용하는 연산자이다.

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; //"age" | "name"
let a: PersonKeys = "age"; //가능
let b: PersonKeys = "ageeee"; //불가능

// Person 타입은 age, name 이라는 key를 가지고 있었기 때문에
// PersonKeys는 'age' | 'name' 타입이 된다. (literal type)

interface Person2 {
  [key: string]: number;
}

type PersonKeys2 = keyof Person2; //string | number
let a2: PersonKeys2 = "age"; //가능
let b2: PersonKeys2 = "ageeee"; //가능

// Person 타입은 모든 문자 key를 가질 수 있기 때문에
// keyof Person 이렇게 하면 string 타입이 된다.
// 실은 string | number 타입이 된다. object key값에 숫자 넣어도 문자로 치환되어서 그렇다.
// [key :number] 이렇게 숫자만 들어올 수 있게 해놓고 keyof Person 을 하면 number 타입이다.

// 참고: 자바스크립트는 .keys() 붙이면 key값을 array자료로 담아준다.

// NOTE: Mapped Types
// object안에 있는 속성들을 다른 타입으로 한번에 변환하고 싶을 때 타입변환기를 사용한다.

// type Car의 모든 속성을 string 타입으로 바꿔야 될 때
// 속성이 3개면 직접 다시 만들어도 되겠지만 100개면? 매우 귀찮다.

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Car>;

let obj: 새로운타입 = {
  color: "red",
  model: "kia",
  price: "300",
};
// 1. TypeChanger 처럼 생긴 타입을 만들고
// 2. [ 자유작명 in keyof 타입파라미터 ] : 원하는 타입
// 3. 이렇게 입력하면 object 타입을 입력했을 때 속성명은 그대로지만 다른 타입으로 변환해주는 변환기를 만들 수 있다.
// 4. in 키워드는 왼쪽이 오른쪽에 들어있냐라는 뜻이고
// 5. keyof는 오브젝트 타입에서 key값만 union type으로 뽑아주는 역할이다.
// (결과) 새로운타입은 color, model, price 속성을 가지고 있으며 전부 string 타입이된다.
// key 값이 100개 있는 object 타입을 변경할 일이 있으면 쓰도록 하자.

// 연습

// color, model, price 속성은 전부 string 또는 number 타입이여야 한다.
type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type BusChanger<MyType> = {
  [key in keyof MyType]: string | number;
};

type NewBus = BusChanger<Bus>;

// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보기

type Bus2 = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger2<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus2 = TypeChanger2<Bus2, boolean>;
type NewBus3 = TypeChanger2<Bus2, string[]>;

// TypeChanger 쓸 때마다 타입파라미터를 T 자리에 하나 더 입력할 수 있게되고, 오브젝트 모든 속성은 T로 바뀜
