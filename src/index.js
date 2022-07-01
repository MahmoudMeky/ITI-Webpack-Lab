import "./css/main.css";
import sayHi from "./js/alert";
import image from "./img/aboutme.png";

import printMe from "./print"


printMe()


sayHi();


function createElement(element,text1,text2) {
    const el = document.createElement(element);
    el.innerHTML =`${text1} ${text2}`;
    return el
}

let myImg=document.createElement("img");
myImg.setAttribute("src",image)
myImg.setAttribute("width","400")



document.body.append(createElement("nav","Nav","Bar"))

document.body.append(myImg);

document.body.append(createElement("main","Body","Section"))

document.body.append(createElement("footer","Footer","Section"))



