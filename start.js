const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'dist')));
app.listen(80, ()=>{
    console.log('node服务开启在80端口');
});
