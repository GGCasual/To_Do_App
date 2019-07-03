//Grabs express and creating an instance
let express = require("express");
let app = express();
let port = 8000;

//Set views folder as default views
app.set('views', 'views')
//Sets the view engine to ejs
app.set('view engine', 'ejs')

//Sets the static files to my public folder
app.use(express.static('public'))

//Imports the info from these files
app.use(require('./routes/api.js'))
app.use(require('./routes/home.js'))
app.use(require('./routes/done.js'))


//Port config
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

