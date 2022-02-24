const express = require("express");
const cors = require("cors");
const db = require("./models");
const router = require("./routes/itemRoutes.js");
const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};

//config setup
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

require("./routes/itemRoutes.js")(app);

//port setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});