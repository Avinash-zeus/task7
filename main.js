import Background from "./background.js";
import Child from "./child.js";

const background = new Background('#000000');
const background2 = new Background('#000000');
const background3 = new Background('#000000');
const background4 = new Background('#000000');

const child = new Child('50px', '50px', 'red');
const child2 = new Child('50px', '50px', 'green');
const child3 = new Child('50px', '50px', 'red');
const child4 = new Child('50px', '50px', 'green');

background.addChild(child);
background2.addChild(child2);
background3.addChild(child3);
background4.addChild(child4);