const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
 
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the movies_db database.`)
);



const promptUser = () => {
    inquirer.prompt([
        {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit"
        ]
    }
    ])
      .then((answers) => {
// I could do this as a switch statement or if?????

        
      })


    };


    //Add my functions.....







app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  