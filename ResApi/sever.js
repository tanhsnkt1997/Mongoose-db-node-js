var http = require('http');
//var app = express();
const app = require('./app');


var port = process.env.PORT || 3000;
const sever = http.createServer(app)
sever.listen(port);

console.log('RESTful API server started on: ' + port);

/*

app.use("/assets", express.static(__dirname + "/public"));


app.get("/", function (req, res) {
    res.send(`
    <link href="/assets/style.css rel="stylesheet" type="text/css">
    <h1>Hello expressssss</h1>`
    );
});

app.get("/api", function (req, res) {
    res.json({
        firstName: "Mai",
        LastName: "TA"
    })
})

// /user/123
app.get("/user/:id", function (req, res) {
    res.send(`<h1>User : ${req.params.id}</h1>`)
})
*/


