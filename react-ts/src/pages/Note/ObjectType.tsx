// NOTE: 객체 타입

// NOTE: function
// 함수는 총 두 군데 타입지정 가능
// 1. 함수로 들어오는 자료 (파라미터)
// 2. 함수에서 나가는 자료 (return)
function sayHi(name: string): string {
  return `Hi, my name is ${name}`;
}

//* 함수는 void 타입을 사용할 수 있다.
// return할 자료가 없는 경우 사용, 뭔가를 return하려고할 때 에러가 발생함
// 함수에 return 방지를 해주고 싶을때 활용
function num(x: number): void {
  // return x * 2 //여기서 에러남
}

//* 파라미터가 옵션일 경우
//* 중요한점! 물음표는 x: number|undefined랑 같은 의미임
// 파라미터가 정의가 안되면 자동으로 undefined가 되니까
function something(x?: number) {}
something(); //가능
something(2); //가능

// function 내함수(x? :number) :number {
//   return x * 2
// }  // error: 'x' is possibly 'undefined'.
// x라는 파라미터는 옵션이고, 옵션인 파라미터는 number|undefined로 타입정의됨
// 그래서 아직 x라는 파라미터가 뭔지 확실하지 않기 때문에 에러 발생
// 또한 자료 조작도 금지됨!

function hi(x?: string) {
  if (x) {
    console.log("hi" + x);
  } else {
    console.log("please enter");
  }
}

// NOTE: array
let users: string[] = ["kim", "lee", "park"];
let users2: (string | number)[] = ["kim", 1, "lee", 2, 3, "park"];

// NOTE: object
let info: { id: string | number; pw: number } = { id: "Ooh", pw: 123 };

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];

// NOTE: class
//* 필드값 타입지정
// class 내부에는 모든 자식 object들이 사용가능한 속성같은걸 만들 수 있다.
// 예를 들어서 모든 Person 클래스의 자식들에게 data 라는 속성을 부여해주고 싶으면
class Person {
  data: number = 0;
}

let john = new Person();
let kim = new Person();
john.data = "1"; // Type 'string' is not assignable to type 'number'.

console.log(john.data); // 0
console.log(kim.data); // 0

//* constructor 타입지정
// class는 간단히 말하면 object 복사기계이다.
class Person2 {
  constructor() {
    this.name = "kim"; //  Error : Property 'name' does not exist on type 'Person'
    this.age = 20;
  }
}
//* ==> this.OO를 사용하고 싶으면 OO를 미리 필드값으로 만들어줘야 에러가 안남
// 필드 값으로 name, age가 미리 정의되어있어야 constructor 안에서도 사용가능
class Person3 {
  name;
  age;
  constructor(a: string) {
    this.name = a;
    this.age = 20;
  }
}

//* 참고
// 1. 기본 파라미터(default parameter)를 쓰면 타입지정 안해도됨
// 2. 참고로 constructor 함수는 return 타입지정을 하면 안됨
// constructor에 의해서 항상 object자료가 생산되기 때문에 생각해보면 의미없다.
class Person4 {
  name;
  age;
  constructor(a = "kim") {
    this.name = a;
    this.age = 20;
  }
}

// NOTE: methods 타입지정
// class 내부엔 함수를 입력할 수 있는데 이 함수는 Person5라는 클래스의 prototype에 추가된다.
// 그럼 모든 Person5의 자식들은 add라는 함수를 이용할 수 있다.
class Person5 {
  add(x: number): number {
    return x + 1;
  }
}

class Car {
  model: string;
  price: number;
  constructor(m: string, p: number) {
    this.model = m;
    this.price = p;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); // { model : '소나타', price : 3000 }
console.log(car1.tax()); // 300


um = 숫자들 array, this.str = 문자들 array 이렇게 해줬습니다. 
class Word {
  num;
  str;

  constructor(...param: (number | string)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

// 1. class Word를 만들고 constructor를 만들었는데 
// 2. 그 안에는 rest parameter가 들어올 수 있다고 만들었다. 이제 new Word() 할 때 파라미터 많이 입력가능
// 3. rest parameter는 array로 들어온다. 그걸 반복문 돌려서 하나하나 검사
// 4. 파라미터 타입이 문자면 문자들 [] 에 추가, 숫자면 숫자들 [] 에 추가

// 5. this.n

export {};
