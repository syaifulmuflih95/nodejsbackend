const express = require("express");		// memanggil EXPRESS
const cors = require("cors");			// memanggil CORS
const app = express();					// EXPRESS ditampung di variable app
const db = require("./app/models");

//drop existing tables and re-sync database
// db.sequelize.sync({force: true}).then(() => {
// 	console.log("Drop and re-sync db.");
// });

var corsOptions = {
	origin: "http://localhost:8081"
};
app.use(cors(corsOptions));  			// parse requests of content-type - application/json
app.use(express.json());				// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// SIMPLE ROUTE
app.get("/", (req,res) => {
	res.json({message: "Welcome to SIA application"});
});

require("./app/routes/tutorial.routes")(app);

// SET PORT, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
