/*
* */
const fs = require('fs')
var request = require('request');

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



var downloadPic = function(src, dest){
    request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
        console.log('pic saved!')
    })
}

if(paramsObj['-download'] || paramsObj['-d']){
   // 下载图片
    downloadPic('https://www.html.cn/newimg88/2018/11/javaScript-handbook-220x150.jpg','./files/10.jpg');
    //downloadPic('https://avatars2.githubusercontent.com/u/7146036?s=60&v=4','./files/2.jpg');

 //   下载md文件
    //downloadPic('https://raw.githubusercontent.com/tuihou123321/githubProject/master/README.md','./files/基于nodeJS开发自己的命令行工具.md');

}

