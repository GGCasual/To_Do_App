let express = require('express');
let router = express.Router();

//Accessing the data
let todos = require("../data/todos.json")

//What gets sent to the user
router.get("/api", (req, res) => {
    //Responds with JSON file in todos
    res.json(todos)
})

//Give other files the option to access this
module.exports = router;