import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [user, setUser] = useState<string | number>("Lee");

  return (
    <div className="App">
      <h4>타입스크립트 알아보기</h4>
      <Profile name="이윤정" />
    </div>
  );
}

const Profile = (props: { name: string }): JSX.Element => {
  return <div>{props.name}입니다.</div>;
};

export default App;
