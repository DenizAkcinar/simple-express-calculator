const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/sum", function (req, res) {
    const number1 = Number(req.body.N1);
    const number2 = Number(req.body.N2);
    const result = number1 + number2;
    res.send(result.toString());
});

app.post("/minus", function (req, res) {
    const number1 = Number(req.body.N1);
    const number2 = Number(req.body.N2);
    const result = number1 - number2;
    res.send(result.toString());
});

app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/BmiCalculator.html");
});

app.post('/bmi', function (req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const result = weight / (height * height);
    res.send('BMI: ' + result);
});

app.listen(4000, function () {
    console.log("Listening on port 4000");
    console.log(process.env.database_password);
});
