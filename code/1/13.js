/*
查询天气
node 13.js -weather shanghai
node 13.js -w shanghai
* */
const util =require('./public/public');
const axios = require('axios');

let paramsObj=util.getArrParams()

let weather=paramsObj['-weather'] || paramsObj['-w'];

if(weather){
 axios.get(`https://api.seniverse.com/v3/weather/now.json?key=SCieIl4Bf2o14ipQX&location=${weather}&language=zh-Hans&unit=c`).then(res=>{
     let data=res.data;
     let cityName=data.results[0].location.name;
     let now=data.results[0].now;
     let {text,temperature}=now;
     console.log(`${cityName}今天${text},温度${temperature}度`);
 }).catch(err=>{
     console.log(err.data);
 })
}

