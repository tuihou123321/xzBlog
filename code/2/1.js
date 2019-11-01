var fs = require("fs")

// 异步读取
function getFileContent(filePath,cb){
    fs.readFile(filePath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        let content=data.toString();
        // console.log("异步读取: " + content);
        cb(content);
    });
}

getFileContent('./md/1.md',(content)=>{
    fs.writeFile('1.html',content,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('写入成功');
    });
})


