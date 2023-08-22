const express = require("express");
const { testRunDB } = require("./dbConnection");
const projectsRoute = require("./routes/cat");
var app = express();
var port = process.env.port || 3000;

app.use("/api/cat", projectsRoute);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log("App listening to: " + port);
    testRunDB().catch(console.dir);
});
