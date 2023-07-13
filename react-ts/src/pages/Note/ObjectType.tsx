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

// NOTE: classes

export {};
