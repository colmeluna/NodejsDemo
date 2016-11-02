// Nodejs回调 demo  
// Node.js 异步编程的直接体现就是回调。
// 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
// 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
// 例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
// 这样在执行代码时就没有阻塞或等待文件 I/O 操作。
// 这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
// 参考 nodejs的File System，即nodejs针对文件系统的库。
// https://nodejs.org/api/fs.html

// Node 应用程序是如何工作的？
// 在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

var fs = require("fs");


//【同步】读取文件 待文件读取结束后输出文件内容 。有阻塞。
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("end test1");



//【异步】读取文件 先执行完毕 待文件读取完毕后执行输出指令。无阻塞。
var data2 = fs.readFile('input.txt',function(err,readdata){
    if (err) { 
        return console.error(err);
    }
    console.log(readdata.toString());
});

console.log("准备写入文件");

fs.writeFile('input333.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});