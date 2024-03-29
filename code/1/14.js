// 创建流mp3服务器

// 引入http模块和fs模块
var http=require('http')
var fs=require('fs')

// 创建一个本地服务器,127.0.0.1.md.txt:3000
http.createServer((req,res)=>{
    var mp3='./static/files/01.mp3'
    var stat=fs.statSync(mp3)

    res.writeHead(200,{
        'Content-Type':'audio/mpeg',
        'Content-Length':stat.size
    })

    //创建可读流
    var readableStream=fs.createReadStream(mp3)
    // 管道pipe流入
    readableStream.pipe(res);
}).listen(3000)
console.log('服务器运行在 127.0.0.1.md.txt:3000端口')
