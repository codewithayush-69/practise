import { log } from "console";
import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainMenu = () => {
  console.log("\n1. create your file");
  console.log("2. view file ");
  console.log("3. view all file name");
  console.log("4. delete your file");
  console.log("5. Exit");
  rl.question(" Choose a option: ", handleInput);
};

const handleInput = (input) => {
  if (input === "1") {
    rl.question("enter your file name: ", (task) => {
      rl.question("enter your text: ", (data) => {
        // Add .txt if not included
        task = task.includes(".") ? task : task + ".txt";

        // Always set full file path inside folder
        let filePath = "file/" + task;

        // Write the file
        fs.writeFileSync(filePath, data, "utf-8");

        console.log("✔️ File created successfully!");
        mainMenu();
      });
    });
  } else if (input === "2") {
    rl.question("Write your file name: ", (filename) => {
      let fileToRead = filename.includes(".") ? filename : filename + ".txt";
      let filePath = "file/" + fileToRead;
      try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log(`\n File content of ${fileToRead}: ${data}`);
      } catch (error) {
        console.log("File not found, Try again");
        handleInput("2");
      }
      mainMenu();
    });
  } else if (input === "3") {
    const folderPath = "file";
    const files = fs.readdirSync(folderPath);
    console.log("📂 Files in 'file' folder:");
    files.forEach((file) => {
      console.log("📄", file);
    });
    mainMenu();
  } else if (input === "4") {
    rl.question("Enter your file name: ", (filename) => {
      let fileToDelete = filename.includes(".") ? filename : filename + ".txt";
      let filePath = "file/" + fileToDelete;
      fs.unlinkSync(filePath, () => {
        console.log("this file does not exist");
      });
      mainMenu();
    });
  } else if (input === "5") {
    console.log("Good bye bro");
    rl.close();
  } else {
    console.log("please enter a vaid option");
    mainMenu();
  }
};

mainMenu();
