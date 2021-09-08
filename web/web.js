const express =require('express');
const app = express();

// 托管静态资源
app.use(express.static('views'));


// 启动服务器
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
})