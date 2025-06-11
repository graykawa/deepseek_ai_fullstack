// 创建一个服务
// 定义一个接口 /api/users
// 读取db.json文件，向前端返回数据
// 启动服务，监听3000端口
require('dotenv').config();
const http = require('http');
const fs = require('fs');
const OpenAI = require('openai');

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY,
});

const server = http.createServer(async(req, res) => {
    // 处理跨域
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    if(req.url.includes('/api/users')){
        const url = new URL(req.url,`http://${req.headers.host}`)
        const query = url.searchParams.get('name');
        if(query === 'undefined' || query === ''){
            const data = fs.readFileSync('./db.json', 'utf-8');
            const users = JSON.parse(data).users;
            res.end(JSON.stringify({
                success: true,
                data: users
            }));
        }else{
            const data = fs.readFileSync('./db.json', 'utf-8');
            // 让deepseek去db.json文件中查找哪一条数据的name属性等于query的值
            // 将这条数据返回给前端
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You are a helpful assistant." },
                    {role:"user",content:`请分析${data}中的数据，查找哪一条数据的name属性最相似于${query}的值，将这条数据读取出来，存放在一个数组中，返回给我，不要任何其他多余文字,
                    形如:[{"id":9,"name":"Miray","age":23,"address":"China"}]`}
                ],
                model: "deepseek-chat",
            });
            const users = completion.choices[0].message.content;
            res.end(JSON.stringify({
                success: true,
                data: JSON.parse(users)
            }));
        }
    }
})
server.listen(3000, () => {
    console.log('服务启动成功');
})
