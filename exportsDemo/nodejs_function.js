
// 在JavaScript中，一个函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，
// 也可以在传递参数的地方直接定义函数。
function say(word){
    console.log("say word is :"+word);
}

function execute(functionName,value){
    functionName(value);
}

var sayword = "我说的内容。";
execute(say,sayword);




//匿名函数  不比先定义function 再以参数的形式传入。可以直接使用。例如：
function execute2(someFunction, value) {
    someFunction(value);
}

//此处直接写入 所以叫做匿名函数
execute2(function (word) {
    console.log(word)
}, "Hello");