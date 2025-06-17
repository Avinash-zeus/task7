import Background from "./background.js";
import Child from "./child.js";

const background = new Background('#000000');

const child = new Child('50px', '50px', 'red');
const child2 = new Child('50px', '50px', 'green');

background.addChild(child);
background.addChild(child2);

document.body.appendChild(background.getElement());