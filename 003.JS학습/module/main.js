import { name, age } from "./person.js";
import message from "./message.js";

document.getElementById("demo").innerHTML = message("현석",40);
document.getElementById("demo").innerHTML += message("유나",25);
document.getElementById("demo").innerHTML += message("성희",52);