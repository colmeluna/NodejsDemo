var buf = new Buffer(256);
var len = buf.write("adfadfadfa");
console.log("写入的字节数："+len);


var buf2 = new Buffer(55);
for(var i = 0;i < 26; i++)
{
    buf2[i] = i + 97;
}
console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii',0,5));   // 输出: abcde
console.log(buf2.toString('utf8',0,5));    // 输出: abcde
console.log(buf2.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
console.log(buf2.toJSON());

var buf3 = new Buffer('www.runoob.com');
var json = buf3.toJSON(buf3);
console.log(json);