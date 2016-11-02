var mysql = require('mysql');
var fs = require('fs');

//读取配置文件
var config = JSON.parse(fs.readFileSync('./mysql.json'));
// var connection = mysql.createConnection({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database,
//     port: config.port
// });

var connection = mysql.createConnection({
    host: '123.57.61.216',
    user: 'root',
    password: 'zhouxin',
    database: 'test',
    port: '3306'
});

function getName(callback) {
    connection.connect();
    connection.query('SELECT name from people where id = 1', function (err, rows, fields) {
        if (err) throw err;
        name = rows[0].name;
        console.log('name is ' + name);
        callback(null, name);
    });
    connection.end();
    console.log('close the connection');
}


var name = getName(function (err, data) {
    if (err) {
        alert('出错了:' + err);
    } else {
        //alert('你要的页面数据为:' + data);
       console.log(data);
        /// / document.title = data+"的抽奖";
    }
});