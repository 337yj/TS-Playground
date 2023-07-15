// NOTE: 삼항연산자로 타입만들기

type User<T> = T;
// 이제 User<string> 이렇게 쓰면 그 자리에 string가 남는다. (타입변수에도 타입파라미터 넣기 가능)

// 근데 타입파라미터 자리에 string 타입을 집어넣으면 string 부여해주고 그게 아니면 전부 unknown 부여하게 만들려면?
// 타입 조건식은 주로 extends 키워드와 삼항연산자를 이용
// "extends는 왼쪽이 오른쪽의 성질을 가지고 있냐" 라는 뜻으로 사용할 수 있기 때문에 나름 조건식 용도로 사용가능
// 비유하자면 수학에서 쓰는 ⊂ 이런 기호 역할
// 아직 타입이 확실하지 않은 <타입파라미터> 다룰 때 많이 사용

type Age<T> = T extends string ? string : unknown;
let age: Age<string>; //age는 string 타입
let age2: Age<number>; //age는 unknown 타입

// 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
// array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까?
type FirstItem<T> = T extends any[] ? T[0] : any;
let age3: FirstItem<string[]>;
let age4: FirstItem<number>;

// NOTE: infer 키워드
// infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드이다.

type Person<T> = T extends infer R ? R : unknown;
type NewPerson = Person<string>; // NewPerson은 string 타입입니다

// 1. infer 키워드는 조건문 안에서만 사용가능
// 2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라~ 라는 뜻
// 그래서 위의 예제에서 <string> 이렇게 타입파라미터자리에 string 집어넣으면 R은 string이 된다.
// 3. R을 조건식 안에서 맘대로 사용가능
// 이런 식으로 타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓰는 키워드라고 보면 된다.

//* infer을 무슨 용도로 쓰지?
// 1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있다.
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type NewType = 타입추출<boolean[]>; // NewType 은 boolean 타입
// (infer R)[] 이렇게 하면 array가 가지고 있던 타입부분만 쏙 뽑아서 R 변수에 할당할 수 있다.

// 2. 함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있다.
type 타입추출2<T> = T extends () => infer R ? R : unknown;
type NewType2 = 타입추출2<() => number>; // NewType2은 number 타입

// 타입파라미터에 <함수>를 집어넣었다.
// 그 타입파라미터에 있는 return 타입을 쏙 뽑아서 R이라는 변수에 담는 코드이다.
// 일정한 규칙이 있다기 보다 그냥 타입을 추출하는 식으로 이해하면 된다.
// 실은 이런 것도 직접 만들어쓸 필요는 없고
// ReturnType<> 이런 예약 타입이 있는데 여기에 함수타입 집어넣으면 return 타입만 뽑아서 알려줌

export {};
