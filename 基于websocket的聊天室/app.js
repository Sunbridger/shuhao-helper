var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var session = require('express-session');
var bodyparser = require('body-parser');

app.set('views', __dirname); //设置模板的目录
app.set('view engine', 'html'); // 设置解析模板文件类型：这里为html文件
app.engine('html', require('ejs').__express); // 使用ejs引擎解析html文件中ejs语法

app.use(bodyparser.json()); // 使用bodyparder中间件，
app.use(bodyparser.urlencoded({ extended: true }));

// 使用 session 中间件
app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，3分钟
    },
}));
let name1,name2;
app.get("/",function (req,res,next) {
  res.sendFile(__dirname+"/login.html");
});

app.use(express.static('style'));

app.get('/1', function (req, res) {
  if(name1){
      res.render('./index.html');
  }else{
      res.redirect('/');
  }
})
app.get('/2', function (req, res) {
  if(name2){
      res.render('./index2.html');
  }else{
      res.redirect('/');
  }
})
app.post("/login",function (req,res,next) {
  if(req.body.username == 'sun' && req.body.pwd == '111'){
    name1 = req.body.username; // 登录成功，设置 session 移动端做不来session 先暂时用变量
    res.redirect('/1');
  }
  if(req.body.username == 'bridger' && req.body.pwd == '222'){
    name2 = req.body.username; // 登录成功，设置 session
    res.redirect('/2');
  }
  else{
    res.redirect('/')// 若登录失败，重定向到登录页面
  }
});
http.listen(8081, function(){
  console.log('listening on *:8081');
});

// io.on("connection",function (clientSocket) {
//     clientSocket.on("joinRoom",function (data,fn) {
//         clientSocket.join(data.roomName);
//         fn({"code":0,"msg":"加入房间成功","roomName":data.roomName});
//     });
//     clientSocket.on("leaveRoom",function (data,fn) {
//         clientSocket.leave(data.roomName);//leave(房间名) 离开房间
//         fn({"code":0,"msg":"已退出房间","roomName":data.roomName});
//     });
//     clientSocket.on("sendMsg",function (data,fn) {
//         clientSocket.broadcast.to(data.roomName).emit("receiveMsg",data);
//         fn({"code":0,"msg":"消息发生成功"});
//     });
// });