/*
计算器功能：默认从第三个参数开始
node 8.js -search 周杰伦
node 8.js -search '2012 2013'
node 8.js -s 周杰伦
* */
var open = require("open");

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

