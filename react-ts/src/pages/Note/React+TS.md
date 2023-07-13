NOTE: 타입스크립트를 사용하는 이유
타입스크립트를 사용하는 가장 큰 이유는 정적 타이핑을 지원한다는 것이다.
자바스크립트의 특징인 동적 타이핑은 자바스크립트 엔진에 의해 자동으로 해석되기 때문에 의도에 따라 전달하고 받는 데이터의 타입이 불분명해질 수 있다.

타입을 지정해줌으로써, 프로그래밍 단계, HTTP 통신을 통한 데이터를 주고받는 과정에서 생기는 데이터를 안전하게 주고 받을 수 있다.

또한, 프로젝트 규모가 크거나 다른 사람이 작성한 코드를 수정할 일이 생길 때 타입 관련 버그를 줄일 수 있다.

그리고 타입을 미리 선언해줬기 때문에 타입에 관련된 프로토타입 메서드를 손쉽게 찾아 쓸 수 있다는 장점 또한 존재한다.

참고 : 타입스크립트 쓴다고 리액트 개발방식이나 성능이 달라지는게 아니라
함수 변수 정의 부분 타입지정을 할 수 있다는 것만 달라진다.
"props엔 무조건 {name: string}만 들어올 수 있어!"
이런 문법을 작성하는게 끝이다.

NOTE: React-TypeScript 설치

리액트 + 타입스크립트 설치

> `npx create-react-app 프로젝트명 --template typescript`

기존 리액트에 타입스크립트 설치
기존 프로젝트 경로에서 아래와 같이 입력 (.js => .tsx로 변경)

> `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

NOTE: tsconfig.json
ts파일들을 js파일로 변환할 때 어떻게 변환할 것이지 세부설정이 가능하다.
공식문서 : https://www.typescriptlang.org/tsconfig

```json
{
  "compilerOptions": {
    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거

    "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
    "noFallthroughCasesInSwitch": true //switch문 이상하면 에러내기
  }
}
```

NOTE: JSX 타입지정
리액트에선 변수나 자료에 <div></div> 이렇게 쓰면 HTML이 아니라 JSX가 된다.
이런 자료를 타입지정하고 싶으면 `JSX.Element`라는 타입을 쓰면된다.

```ts
let 박스: JSX.Element = <div></div>;
let 버튼: JSX.Element = <button></button>;
```

NOTE: function component 타입지정
함수는 파라미터와 return에 타입지정을 해주면 된다.
파라미터는 항상 props기 때문에 props가 어떻게 생겼는지 조사해서 타입지정하면 되고, 컴포넌트는 return으로 JSX를 뱉으니 `JSX.Element`를 써주면 된다. 근데 생략해도 자동으로 타입지정이 됨.

```ts
type AppProps = {
  name: string;
};

function App(props: AppProps): JSX.Element {
  return <div>{message}</div>;
}
```

CHECKLIST
[ ] JSX.IntrinsicElements 알아보기

NOTE: state 문법 사용시 타입지정
state 만들 땐 그냥 자동으로 타입이 할당되어서 걱정할 필요는 없음
state 타입이 나중에 변할수도 있다면 미리 지정하기

```ts
const [user, setUser] = (useState < string) | (null > "kim");
```

<> 열고 타입 넣으면 된다.
Generic 문법을 이용해서 타입을 useState함수에 집어넣는 식으로 설정.

NOTE: type assertion 문법 사용할 때

```ts
let code: any = 123;
let employeeCode = <number>code; //안됨
```

assertion하고 싶으면 `as`또는 `<>` 쓰면 되는데
리액트에서 컴포넌트로 오해할 수 있어서 꺾쇠 괄호는 쓰지 않음
`as` 키워드만 쓰자.
하지만 `as`키워드는 타입스크립트 안해제기 때문에 타입이 100% 확실할 때만 사용하도록!!!

NOTE: .tsx와 .ts
JSX 문법을 쓰는 파일은 .tsx
일반 파일은 .ts

NOTE: tsc -w
자동으로 ts파일을 js파일로 변환, 에러메시지를 상세히 볼 수 있다.
