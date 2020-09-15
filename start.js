// const express = require('express');
// const app = express();
// const path = require('path');
// app.use(express.static(path.resolve(__dirname, 'dist')));
// app.listen(80, ()=>{
//     console.log('node服务开启在80端口');
// });

let express = require("express");
let http = require("http");
let https = require("https");
let fs = require("fs");
const path = require('path');
const compression = require('compression');

// Configuare https
const httpsOption = {
    key : fs.readFileSync(path.resolve(__dirname, "./2_www.sunbridger.site.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "./1_www.sunbridger.site_bundle.pem"))
}
// Create service
let app = express();

app.use(compression());

app.use(express.static(path.resolve(__dirname, 'dist')));
http.createServer(app).listen(80);
https.createServer(httpsOption, app).listen(443);
