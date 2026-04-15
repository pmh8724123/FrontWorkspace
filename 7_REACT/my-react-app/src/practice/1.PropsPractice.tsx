import React, { useState } from 'react';


interface UserInfoProps {
    name : string;
    age : number;
    hobby : string[];
    setName : (name:string) => void;
    setAge : (age:number) => void;
    setHobby : (hobby:string[]) => void;
}

export default function UserInfoContainer() {
  const [name, setName] = useState('홍길동');
  const [age, setAge] = useState(30);
  const [hobby, setHobby] = useState(['코딩','게임']);
  return (
    <div>      
      <UserInfo name={name} age={age} hobby={hobby} setName={setName} setAge={setAge} setHobby={setHobby}/>
    </div>
  );
}

function UserInfo({name, age, hobby, setName, setAge, setHobby}: UserInfoProps) {
  const handleChangeName = () => {
    setName("mkm");
    setAge(22);
    setHobby(['취미1','취미2']);
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름:{name} </h3>
      <h3>나이:{age} </h3>
      <h3>취미:{hobby} </h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}