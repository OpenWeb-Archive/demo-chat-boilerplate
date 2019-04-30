// let http = require('http')
// let app = http.createServer()

//STRETCH GOALS, BUILDING OUT A CUSTOM SERVER TO DIVE DEEPER INTO SOCKET.IO, TO BUILD MULITPLE INSTANCES OF CHATROOMS

let app = require("http").createServer();
let io = (module.exports.io = require("socket.io")(app));

const PORT = process.env.PORT || 8000;

const SocketManager = require("./socketManage");

io.on("connection", SocketManager);

app.listen(PORT),
  function() {
    console.log("Connected on port" + PORT);
  };
// let app = express();
// let server = app.listen(3000, function() {
//   console.log("listening to requests on port 3000");
// });
//
// app.use(express.static("src"));
