import { name, age } from "./person.js";
import message from "./message.js";

document.getElementById("demo").innerHTML = message("현석",40);
document.getElementById("demo").innerHTML += message("유나",25);
document.getElementById("demo").innerHTML += message("성희",52);
document.getElementById("demo").innerHTML += 
`이것은 다른 출력입니다! 이름:${name} , 나이:${age}<br>`;