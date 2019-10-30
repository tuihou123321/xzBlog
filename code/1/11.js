/*
计算器功能：默认从第三个参数开始
node 10.js -open www.baidu.com   //打开百度
node 10.js -open D:\Everything\Everything.exe
* */
var fetch = require('node-fetch');
const fsExtra = require('fs-extra')
const superagent = require('superagent')
require('superagent-charset')(superagent)


function saveArrFile(str,fileName){
    fsExtra.outputFileSync(path.join(path.resolve(__dirname, 'files'), fileName), str);
}

let paramsArr=process.argv.slice(2);

function arrToObject(arr=[]){
    let obj={}
    arr.forEach((item,index)=>{
        if(item.startsWith('-')){
            let next=arr[index+1];
            obj[item]=next && next.startsWith('-') ? null : next;
        }

    })
    return obj;
}

let paramsObj=arrToObject(paramsArr);

function fetchUrl(url, callback) {
    superagent.get(url)
        // .charset('utf-8')
        .charset('gbk')
        .end(function (err, res) {
            callback(err, res)
        })
}


if(paramsObj['-download'] || paramsObj['-d']){
    //下载html文件
    fetchUrl('http://www.zwdu.com/book/8634/',(err,res)=>{
        let text=res.text;
        saveArrFile(text,'file.html')
    });
}

