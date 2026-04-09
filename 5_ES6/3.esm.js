function sayHi(){
    console.log("hello module");
}
const abc = "abc";

export {sayHi, abc};
export const fn1 = (a) => console.log(a); // 함수 선언과 동시에 export 가능

// default문법
export default abc;