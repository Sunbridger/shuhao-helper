
实现原理：
利用node作为跳板 
当有访问即将跨域的地址时：此处是豆瓣书城的接口
node作为服务器catch住这个地址
并且把此地址进行改造
比如加上必须的响应报文头
此处加的是：
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Content-Type: text/html; charset=utf-8');
res.header('Access-Control-Allow-Credentials', 'true');
既然服务端这边设置好地址后
前端通过访问服务端设置好的‘伪地址’这里是：/doubanBook 这个地址进行请求即可
因为服务端会对此进行改造
