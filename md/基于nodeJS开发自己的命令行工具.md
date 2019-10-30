## 基于nodeJS开发自己的命令行工具

### 预计要实现的功能
- [x] 资源下载（html,mp3,mp4,md,svg）
- [x] 自定义搜索（指定网站，多个网站同时搜索）
- [x] 软件启动
- [x] 计算功能

### 使用事例

```
node main.js 10*20-10   //计算器
node main.js -count 10*20-10   //计算器
node main.js -search chrome    //搜索
node main.js -download https://raw.githubusercontent.com/tuihou123321/ppt/master/readme.md  //下载文件
node main.js -music   //自动播放网易云音乐中的热门音乐
node main.js open chrome  //启动本地软件
```

### demo 源码地址： 
> ./code/1
