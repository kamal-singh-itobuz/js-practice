const fs = require('fs');


let input = process.argv.slice(2);

// to show the instructions
if (input.length === 0) {
    console.log("-------Instructions------");
    console.log("1. NOTE : Use quotes if title or description has more than one word.");
    console.log("2. To add task, write : node fileName.js 'add' 'title' 'description'");
    console.log("3. Want to modify todo, write : node fileName.js 'update' 'title' 'description'")
    console.log("4. Want to delete a task, write : node fileName.js 'delete' 'title'")
    console.log("5. If you need any Help, Write : node fileName.js 'help' (with or without quotes)");
    console.log("6. Want to show your todo List, write : node fileName.js 'show'");
}


// to take help 
if (input.length === 1 && input[0] === 'help') {
    console.log("again read the instructions carefully by typing command => node main.js");
}


// to show todo List
else if (input.length === 1 && input[0] === 'show') {
    const data = fs.readFileSync('db.json');
    const jsonData = JSON.parse(data);
    const tasks = Object.keys(jsonData)[0]; //extract the key
    console.log("Your Tasks List : ", jsonData[tasks]);
}


// add new task
else if (input.length === 3 && input[0] === 'add') {
    let task = {
        title: input[1],
        description: input[2],
        date: new Date(),
    }
    const data = fs.readFileSync('db.json'); //read the json data
    const jsonData = JSON.parse(data); // parse json data into js objects
    jsonData.tasks.push(task); // add new data
    fs.writeFileSync('db.json', JSON.stringify(jsonData)); //again convert js objects to json string
}

// update the task
else if (input.length === 3 && input[0] === 'update') {
    let task = {
        title: input[1],
        description: input[2],
        date: new Date(),
    }
    const data = fs.readFileSync('db.json'); //read the json data
    const jsonData = JSON.parse(data); // parse json data into js objects
    const tasks = Object.keys(jsonData)[0]; //extract the key
    const objInd = jsonData[tasks].findIndex((obj) => obj.title === input[1]);
    objInd === -1 ? console.log("Task does not exist. So You can't update") : jsonData[tasks][objInd] = task;
    fs.writeFileSync('db.json', JSON.stringify(jsonData)); //again convert js objects to json string
}


// delete task
else if (input.length === 2 && input[0] === 'delete') {
    const data = fs.readFileSync('db.json'); //read the json data
    const jsonData = JSON.parse(data); // parse json data into js objects
    const tasks = Object.keys(jsonData)[0]; //extract the key
    const objInd = jsonData[tasks].findIndex((obj) => obj.title === input[1]);
    objInd === -1 ? console.log("Task does not exist. So You can't delete") : jsonData[tasks].splice(objInd, 1);
    fs.writeFileSync('db.json', JSON.stringify(jsonData)); //again convert js objects to json string
}

