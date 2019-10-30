/*
计算器功能：默认从第三个参数开始
node 10.js -open www.baidu.com   //打开百度
node 10.js -open D:\Everything\Everything.exe
* */
var open = require("open");
var shell = require("shelljs");

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

if(paramsObj['-search'] || paramsObj['-s']){
    let searchKeywords=paramsObj['-search'] || paramsObj['-s'];
    open(`https://www.google.com/search?q=${searchKeywords}`, "chrome");
}
else if(paramsObj['-open'] || paramsObj['-o']){
    let target=paramsObj['-open'] || paramsObj['-o'];
    shell.exec("start "+target );
}

