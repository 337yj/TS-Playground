// NOTE: d.ts 파일 이용하기
// 1. 타입정의만 따로 저장해놓고 import 해서 쓰려고
// 2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용
// 타입 정의만 넣을 수 있다.
// 함수의 경우 함수에 { } 중괄호 붙이기는 불가능, 파라미터 & return 타입만 지정가능
// d.ts 파일은 ts 파일이 아니기 때문에 정의해둔 타입은 export 해서 써야한다.
// 한 번에 많은 타입을 export 하고 싶은 경우 import * as 
export type Age = number;
export type multiply = (x :number ,y :number) => number
export interface Person { name : string }

// NOTE: d.ts 파일을 레퍼런스용으로 쓰려면 
// ts파일마다 d.ts 파일을 자동생성해주면 된다.
// tsconfig에다가 declaration 옵션을 true로 바꿔주면 저장시 자동으로 ts파일마다 d.ts파일이 생성된다.

// (tsconfig.json)
{
    "compilerOptions": {
        "target": "es5",
        "module": "es6",
        "declaration": true,
    }
}

// NOTE: export 없이 d.ts 파일을 글로벌 모듈 만들기
// 원래 d.ts 파일은 import export 없어도 로컬모듈이다. => import해서 사용
// 이게 귀찮으면 d.ts를 글로벌 모듈로 만들어서 사용할 수 있다.
// 프로젝트 내에 types/common 이런 폴더 두개를 만들고 tsconfig.json 파일에 "typeRoots": ["./types"] 이런 옵션을 추가한다.
//  다만 이걸 쓸 경우 파일명.d.ts 자동생성 기능은 끄는게 좋고,
// d.ts 파일명은 기존 ts 파일명과 안겹치게 작성하는게 좋다. 
// 하지만 이런거 쓰다가 로컬 타입과 저런 글로벌 타입이 겹치면 안되기 때문에 import export가 안전하다. 

//* 참고
// npm으로 라이브러리 설치시 타입스크립트 타입정의된 버전을 따로 찾아서 설치할 수 있다.
// https://www.typescriptlang.org/ko/ - 타입정의된 npm 패키지 찾아볼 수 있음
// 타입이 정의된 라이브러리를 npm으로 설치하면 node_modules/@types 이런 경로에 타입이 설치된다.
// 그리고 타입스크립트 컴파일러는 자동으로 여기 있는 타입 파일을 참고해서 타입을 가져오게 되어있다.
//* 참고
// "typeRoots" 옵션이 있을 경우 node_modules/@types 폴더를 추가하거나 그냥 "typeRoots" 옵션을 제거해야 한다.
// 혹은 따로 타입부분만 설치할 수도 있다. 
// 예를 들어 타입파일이 제공되지 않는 jQuery 같은 경우 
// npm install --save @types/jquery
// 이렇게 강제로 설치하면 이제 jQuery 문법 사용할 때 타입정의 안해도 된다.


export {};
