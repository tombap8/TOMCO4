import { name, age, personInfo } from "./person.js";
import message from "./message.js";

const exp = document.getElementById("demo");

exp.innerHTML = message("현석",40);
exp.innerHTML += message("유나",25);
exp.innerHTML += message("성희",52);
exp.innerHTML += 
`이것은 다른 출력입니다! 이름:${name} , 나이:${age}<br>`;

// 다중데이터를 이용해보자!

personInfo.forEach((v)=>{
    exp.innerHTML += message(v[0],v[1]);
});