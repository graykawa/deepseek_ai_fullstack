// 启动一个服务
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200, { 
        'Content-Type': 'text/html;charset=utf-8' 
        });
        res.end('<h1>首页</h1>');
    }
    if(req.url === '/user'){
        //读取db.json文件中的数据，将数据返回给客户端
        const data = fs.readFileSync('./db.json', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
        res.end(data);
    }
})

server.listen(3000, () => {
    console.log('服务启动成功');
})