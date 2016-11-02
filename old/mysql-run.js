var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'zx',
    password: 'zx',
    database:'test',
    port: 3306
});
conn.connect();

try {
    ///nodejs查询数据。
    conn.query('SELECT name as a from people ', function (err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0].a);
    });

    //nodejs 删除数据
    conn.query('DELETE FROM people WHERE id = "2"', function (err, result) {
        if (err) throw err;
        console.log('deleted ' + result.affectedRows + ' rows');
    })
}
    catch (err){
        console.log("Error!"+err);
    }
    finally
    {
        conn.end();
    }