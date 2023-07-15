// NOTE: object index signature
// object 자료에 타입을 미리 만들어주고 싶은데
// 1. object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우
// 2. 타입지정할 속성이 너무 많은 경우(각 속성마다 타입을 하나씩 정해주는 것이 아니라 한번에 타입을 지정)
// index signatures 를 사용하면 편리

// 모든 string으로 들어오는 key값에 할당되는 value는 string 이어야한다.
interface StringOnly {
  [key: string]: string;
}

let obj: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

// NOTE: array 형태도 가능
interface StringOnly2 {
  [key: number]: string;
}

let obj2: StringOnly2 = {
  0: "kim",
  1: "20",
  2: "seoul",
};

// NOTE: Recursive Index Signatures
// 중첩된 object들을 한 번에 타입지정하려면 어떻게 해야할까
// 'font-size' 속성은 MyType 이거랑 똑같이 생겼다고 타입지정하기
interface MyType {
  "font-size": MyType | number;
}

let obj3: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// ! 주의: key 타입은 string, number, symbol, Template literal타입만 가능
// 동일한 key를 여러개 가질 수 없음

type userType = {
  [key: string | boolean]: string; // 에러발생
};

// 연습

// 다음 자료의 타입을 지정
let obj4: Obj4Type = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

interface Obj4Type {
  [key: string]: string | number;
}

// 다음 object 자료의 타입을 interface 써서 만들어보기
// 1. MyType을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있다.
// 2. 모든 문자 속성이 들어오면 number | MyType을 가져야한다고 타입지정
interface MyType {
  "font-size": number | MyType;
  [key: string]: number | MyType;
}

let obj5: MyType = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};

export {};
