import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todo = [];

const showmenu = ()=>{
    console.log("\n1: Add new task");
    console.log("2: View task");
    console.log("3: Exit");
    rl.question("Choose an option lawde ", handleInput);
};

const handleInput = (option)=>{
    if (option === "1") {
        rl.question("Add a task:", (task)=>{
            todo.push(task);
            console.log("Task added sucessfully", task);
            showmenu();
        })
    } else if (option === "2") {
        console.log("\nYour Todo list");
        todo.forEach((task,index)=>{
            console.log(`${index + 1}. ${task}`);
        });
        showmenu();
    } else if (option === "3") {
        console.log("Good byee take care");
        rl.close();
    } else {
        console.log("Choose a valid option");
        showmenu();
    }
};

showmenu();