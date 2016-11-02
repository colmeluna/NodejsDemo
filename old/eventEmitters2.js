var events = require('events');
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHander = function connected(){
    console.log('连接成功，开始触发事件data_received');
    eventEmitter.emit('data_received');
}
var receiveHandler = function getData(){
    //do something
    setTimeout(function () { console.log('这里做个延迟模拟，模拟获取数据较慢') }, 2000);
    console.log('获取数据 response end')
}
var printHandler = function print(){
    console.log('这个方法用来验证打印');
}
var input_A_Handler = function A(arg1,arg2){
    console.log('listener1',arg1,arg2);
}
var input_B_handler = function B(arg1,arg2){
    console.log('listener2',arg1,arg2);
}
//绑定事件 on 函数用于绑定事件函数 
eventEmitter.on('connection',connectHander);//连接事件绑定
eventEmitter.on('data_received',receiveHandler); //查询数据事件绑定
eventEmitter.on('print_',printHandler);
eventEmitter.on('input_A',input_A_Handler);
eventEmitter.on('input_B',input_B_handler);

//emit 属性用于触发一个事件
eventEmitter.emit('connection');//触发事件 connection
eventEmitter.emit('print_'); //触发事件
eventEmitter.emit('input_A','参数第一个','参数第二个');
eventEmitter.emit('input_B','34','33');
console.log('所有实例程序执行完毕');



