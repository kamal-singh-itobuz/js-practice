const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todoList = [];
// let todoTitle;
// let todoDescp;
// let moreAdd = "Yes";
let i = 0;
while(i < 2){
    var work = {
        title : "",
        description : "",
        date : new Date(),
    };
    todoList.push(work);
    rl.question("Add Title : ", function (para) {
        todoList[i]["title"] = para;
        rl.close();
    });
    rl.question("Add Description : ", function (para) {
        todoList[i]["description"] = para;
        rl.close();
    });
    
    // rl.question("Want to add more Yes or No: ", function (para) {
    //     moreAdd = para;
    //     if(moreAdd === "No") exit;
    //     rl.close();
    // });
    i++;
}

// console.log(todoList);