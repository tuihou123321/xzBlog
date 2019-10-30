/*
计算器功能：默认从第三个参数开始
node 5.js -count 2*2
* */

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

/*
* - 后面无参数
* */

if(paramsObj['-count']){
    console.log(eval(paramsObj['-count']));
}

