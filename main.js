
let inputArr = process.argv.slice(2);
let command = inputArr[0];

let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");



switch(command){
    case "tree" :
    treeObj.treeFn(inputArr[1]);
    break;

    case "organize":
    organizeObj.organizeFn(inputArr[1]);
    break;

    case "help":
    helpObj.helpFn();
    break;

    default :
    console.log("🙏 Please enter the correct command:: ");
    break;
}