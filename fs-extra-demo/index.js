var fs = require('fs-extra')



//异步方法
//首先创建一个当前时刻的文件夹 用于保存  老旧的json文件
var time = new Date();
var dirna = time.getTime();
console.log(dirna.toString());
fs.mkdirs('./tmp/'+dirna, function (err) {
    if (err) return console.error(err)
    console.log("create tmp dir success!")

});

//同步方法 mkdirsSync
//fs.mkdirsSync('./tmp/another/path')