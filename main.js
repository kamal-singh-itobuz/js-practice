const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todoList = [];

function getUserInput() {
    console.log("Enter Your Choice given below: ");
    console.log("Enter 1 for Adding Task. \nEnter 2 for display todo List. \nEnter 0 for exit.");

    rl.question("Enter a NUmber : ", function (num) {
        let input = parseInt(num);
        performTask(input);
    });
}

function performTask(input) {
    switch(input){
        case 0: {
            rl.close();
            break;
        }
        case 1: {
            rl.question("Add Title : ", function(t) {
                rl.question("Add Description : ", function(d){
                    let obj = {
                        title: t,
                        description: d,
                        date: new Date(),
                    }
                    todoList.push(obj);
                    getUserInput();
                });
            });
            break;
        }
        case 2: {
            console.log(todoList);
            getUserInput();
            break;
        }
    }
}
getUserInput();