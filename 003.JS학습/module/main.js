import { personInfo, mainTitle as tit, subTitle as cont } from "./person.js";
import message from "./message.js";
// import {message as msg} from "./message.js";

const exp = document.getElementById("demo");
const tpart = document.querySelector(".tpart");


// 제목을 출력해 보자!
tpart.innerHTML = 
`
    <h2>${tit}</h2>
    <h3>${cont}</h3>
`;



exp.innerHTML = message("현석",40);
exp.innerHTML += message("유나",25);
exp.innerHTML += message("성희",52);

// 다중데이터를 이용해보자!

personInfo.forEach((v)=>{
    exp.innerHTML += message(v[0],v[1]);
});