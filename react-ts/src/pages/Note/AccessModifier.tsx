// NOTE: 타입스크립트는 객체지향 언어에서 제공하는 public, private, static, protected 키워드 사용가능

// NOTE: public
// 원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능
// 필드값에 public은 원래 부여되어있기 때문에 안붙여도 되긴함

class User {
  public name: string;

  constructor() {
    this.name = "kim";
  }
}

let user1 = new User();
user1.name = "park"; //가능

// NOTE: private
// public과 반대로 속성 수정이 불가능
// private 붙은 속성들은 오직 class { } 안에서만 수정이 가능
// 속성을 외부에서 숨기고 싶을 때, 외부에서 수정 못하게 하고 싶을 때 private 키워드를 이용
// 참고: 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됨
// react-redux에서 자주 보게되는 패턴

class User2 {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = "kim";
    this.familyName = "";
    let hello = this.familyName + "안뇽"; //가능
  }
}

let user2 = new User2();
user2.name = "park"; //가능
user2.familyName = 456; // error: Property 'familyName' is private and only accessible within class 'User2'.

// NOTE: private 부여된 속성을 class 밖에서 수정해야할 경우?
// 1. private 속성을 수정하는 함수를 class 안에 만들어서 2. 함수를 실행시키면됨
class User3 {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = "kim";
    this.familyName = "";
    let hello = this.familyName + "안뇽";
  }
  changeSecret() {
    this.familyName = "park";
  }
}

let user3 = new User3();
user3.familyName = "park"; // error: Property 'familyName' is private and only accessible within class 'User3'.
user3.changeSecret(); //가능
//  class 바깥에서도 changeSecret() 함수를 이용하면 간접적으로 familyName을 수정가능

// NOTE: protected
// private인데 약간 보안을 해제하고 싶을 때 씀
// extends 된 class 안에서도 사용가능하게 약간 보안을 풀어줌

// private와 동일하게 class 안에서만 사용이 가능해지며 User4의 자식들도 함부로 사용이 불가능
class User4 {
  protected x = 10;
}

// User4를 extends 하는 NewUser class
// NewUser가 x를 가져다가 쓰려고 하면 x가 private 속성일 경우엔 에러가 나지만 x가 protected 속성일 경우엔 에러가 나지
class NewUser extends User4 {
  doThis() {
    this.x = 20;
  }
}

//* protected와 private 차이점
// protected: extends된 class는 사용가능, 자식들 사용불가능
// private: extends된 class는 사용불가능, 자식들 사용불가능

// NOTE: static
// class { } 안에 집어넣는 변수, 함수 등 전부 class로 부터 새로 생성되는 object (일명 instance) 에 부여됨
// 근데 class에 직접 변수나 함수를 부여하고 싶으면 static 키워드를 왼쪽에 붙여주면 됨 (자식한텐 부여X)
// extends 로 class를 복사할 경우 static 붙은 것들도 따라옴

//  x와 y같은 변수들은 User로 부터 생성된 object들만 사용가능
class User5 {
  x = 10;
  y = 20;
}

let john1 = new User5();
john1.x; //가능
User5.x; //불가능

// static 키워드를 붙이면 사용 가능해짐 (class역할을 역행)
class User6 {
  static x = 10;
  y = 20;
}

let john2 = new User6();
john2.x; //불가능
User6.x; //가능

//* 주로 class 안에 간단한 메모를 하거나,
//* 기본 설정값을 입력하거나
//* class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용

// 예시
// me에  { intro : 'js 전문가입니다' } 를 복사해주고 싶음
// 근데 여기서 js라는 단어가 중요할 것 같아서 static skill 에 메모해놓고 사용
// 이제 자식인 me에 me.intro 를 할 때 마다 'js 전문가입니다'를 출력해줌
class User7 {
  static skill = "js";
  intro = User7.skill + "전문가입니다";
}
var me = new User7();
console.log(me);

// 근데 갑자기 skill을 변경하고 싶어졌음
// me 이후로 생산되는 인스턴스(자식)들은 'ts 전문가입니다'를 출력하게 하고 싶음
// 그럴 때 class 내부를 직접 js->ts 로 수정해도 되지만
// class가 멀리 떨어져있거나 다른 파일에 있을 경우 귀찮
// 다행히 static 키워드로 만들어놨기 때문에 그걸 수정해도 됨
// User7.skill 을 수정하면 됨

User7.skill = "python";

var me2 = new User7();
console.log(me2);

// 연습
// 다음 x, y, z 속성의 특징을 설명
class User8 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
// User의 자식들은 x와 y를 쓸 수 없습니다.
// 2. private static x는 class 내부에서만 수정가능합니다.
// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.

// 연습
// User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까
// 리고 x값을 콘솔창에 출력해주는 printX() 함수도 만들어보기
// (조건) private static x = 10; 이 코드 수정금지
class User9 {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터: number) {
    User9.x += 파라미터;
  }

  static printX() {
    console.log(User9.x);
  }
}

User9.addOne(3); //이렇게 하면 x가 3 더해져야함
User9.addOne(4); //이렇게 하면 x가 4 더해져야함
User9.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

// 연습
// 네모.draw()를 할 때마다 index.html에 가로 30px, 세로 30px,
// 배경색이 'red' 의 <div> 박스가 가로 400px 세로 400px 공간 안에 무작위로 배치되어야함
// Square라는 class를 어떻게 만들면 될까?
class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string,
  ) {}

  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();

//[ ] 접근제한 키워드를 사용하면 필드 초기화 생략가능한가..?
// class Square {
//   width: number;
//   height: number;
//   color: string;
//   constructor(width: number, height: number, color: string) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
// class Square {
//   private width
//   private height
//   private color
//   constructor( w: number,  h: number,  c: string) {
//     this.width = w;
//     this.height = h;
//     this.color = c;
//   }

// NOTE: static은 private, protected, public 키워드와 동시 사용가능
class User10 {
  private static x = 10;
}

export {};
