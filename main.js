const { createMarble } = require("./marbleMaker.js");
const { weaveBag } = require("./bagMaker.js");

const marble = createMarble("medium");
console.log(marble);
const bag = weaveBag("cotton");
console.log(bag);
