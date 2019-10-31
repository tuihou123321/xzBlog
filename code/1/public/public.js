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

module.exports={
    getArrParams(){
        return arrToObject(process.argv.slice(2))
    }
}



