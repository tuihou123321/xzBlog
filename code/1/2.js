/*
* 通过第三方库打开，封装了不同操作系统调用浏览器的命令
* 相当竽执行命令：start chrome http://www.baidu.com
* */

var open = require("open");
open("http://www.google.com", "chrome");
