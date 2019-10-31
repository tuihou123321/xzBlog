/**
 * Read all files from build/ folder recursively
 */
const util =require('./static/js/public');
const testFolder = './static/files';
const fs = require('fs');

let paramsObj=util.getArrParams()

let keyword=paramsObj['-keyword'] || paramsObj['-kw'];
fs.readdir(testFolder, (err, files) => {
    files=files.filter(item=>{
        return item.indexOf(keyword)>-1
    })
    files.forEach((item,index)=>{
        console.log(item);
    })
})
