
var http=require("http");
var express=require("express");//引入express
var app=new express();//或者直接express()
var proxy=require('http-proxy-middleware');
app.all('/doubanBook',proxy({
  target:'https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10',
  changeOrigin: true,
  onProxyRes:(proxyRes, req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type: text/html; charset=utf-8');
        res.header('Access-Control-Allow-Credentials', 'true');
    },
}))


app.get("/client",function (req,res,next) {
    res.sendFile(__dirname+"/index.html");
});

app.listen(8888);
console.log("8888端口node反向代理服务已启动");
=======
var http=require("http");
var express=require("express");//引入express
var app=new express();//或者直接express()
var proxy=require('http-proxy-middleware');
app.all('/doubanBook',proxy({
  target:'https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10',
  changeOrigin: true,
  onProxyRes:(proxyRes, req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type: text/html; charset=utf-8');
        res.header('Access-Control-Allow-Credentials', 'true');
    },
}))


app.get("/client",function (req,res,next) {
    res.sendFile(__dirname+"/index.html");
});

app.listen(8888);
console.log("8888端口node反向代理服务已启动");
>>>>>>> f6fcf67fea700396c6542842a8e0d01022e116a0
