// NOTE: interface

// interface를 이용해 object자료형의 타입을 보다 편리하게 지정가능하다.
// 예를 들어 { color : 'red', width : 100 } 를 만들고 싶은데 type을 미리 정의하고 싶으면 object랑 비슷한 모습으로 작성하면된다.
// 1. 대문자로 작명하고 2. { } 안에 타입을 명시
// 참고: 한 줄 끝나면 콤마대신 세미콜론도 가능

interface Square {
  color: string;
  width: number;
}

let box: Square = { color: "red", width: 100 };

// NOTE: interface 장점 extends
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

// NOTE: type 키워드와의 차이점
// type alias와 interface는 거의 똑같은 기능을 제공하는데 차이점은 extends 문법이 다르다.

//* type alias의 경우
type Animal = {
  name: string;
};
type Cat = Animal & { legs: number };

//* interface의 경우
//* interface도 type처럼 & 기호를 이용해도 복사가능
interface Animal2 {
  name: string;
}
interface Cat2 extends Animal {
  legs: number;
}

// & 기호 쓰는걸 intersection이라고 부르는데 extends 와 유사하게 사용가능
// ! 주의: extends 쓸 때 타입끼리 중복속성이 발견될 경우 에러가 발생하는데 & 쓰면 때에 따라 아닐 수도 있다.
interface Student {
  name: string;
}
interface Teacher {
  age: number;
}

let 변수: Student & Teacher = { name: "kim", age: 90 };

// NOTE: 타입이름 중복선언시
//* interface의 경우 타입이름 중복선언을 허용해주며 중복시 extends 한 것이랑 동일하게 동작
// 장점: type 선언을 자주 쓰는 외부 라이브러리 이용시 type 선언을 내가 덮어쓰기, override 하기 편리한다.
interface Animal3 {
  name: string;
}
interface Animal3 {
  legs: number;
}

//* type의 경우 중복선언을 허용하지 않음. 엄격함
type Animal4 = {
  name: string;
};
type Animal4 = {
  legs: number;
};
//  일반적인 상황에선 type 키워드를 활용하면 되는데
// 다른사람이 내 코드를 이용하는 상황이 많으면 interface로 유연하게 만드는게 좋음
// 그래서 타입스크립트로 작성된 라이브러리들은 interface로 타입정해놓은 곳이 많음
// 혹은 object 자료형은 전부 interface로 만들고 다른 자료형은 type 키워드로 만들고 해도 괜찮음

// NOTE: extend 할 때 object 안의 속성이 중복될 경우
interface Animal5 {
  name: string;
}
interface Dog5 extends Animal5 {
  name: number; // error: Types of property 'name' are incompatible.
}

// & 연산자로 Dog, Animal을 합쳐도 에러남
// type 키워드도 동일할게 에러남
// ! 주의: name: string, name: number 라서 에러가 나는 것이지
// 둘다  name: string 타입이면 에러나지 않고 하나로 합쳐줌
interface Animal6 {
  name: string;
}
interface Dog6 {
  name: number;
}

let myPet: Dog6 & Animal6 = { name: "멍멍" }; // error: Type 'string' is not assignable to type 'never'.

// NOTE interface 연습
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let productInfo: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}

let cartInfo: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// 위에서 만든 타입을 extends 해보기
interface NewCart extends Cart {
  card: boolean;
}

// object 안에 함수 넣기
interface Funcs {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let object: Funcs = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

// NOTE: class 타입을 확인하고 싶을 때 사용 근데 implements 키워드를 곁들인,,
//* implements 키워드
// class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 ?
// class 이름 우측에 implements를 쓰고 interface 이름을 쓰면
// "이 class가 이 interface에 있는 속성을 다 들고있냐" 라고 확인 가능
// 빠진 속성이 있으면 에러 발생
interface CarType {
  model: string;
  price: number;
}
class Car implements CarType {
  model: string;
  // price : number = 1000; // error: Property 'price' is missing in type 'Car' but required in type 'CarType'.
  constructor(a: string) {
    this.model = a;
  }
}

let myCar = new Car("morning");

// ! 주의: implements는 타입지정문법이 아니다.
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻
// class에다가 타입을 할당하고 변형시키는 키워드가 아니다!
interface CarType2 {
  model: string;
  tax: (price: number) => number;
}

class Car2 implements CarType2 {
  model; ///any 타입됨
  tax(a) {
    ///a 파라미터는 any 타입됨
    return a * 0.1;
  }
}
// CarType에 있던 model : string 이런게 반영되는건 아니다.

export {};
