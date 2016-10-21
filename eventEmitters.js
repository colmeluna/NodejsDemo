// 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。
// 包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
// 为什么要这样做呢？原因有两点：
// 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
// 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。


var events = require('events');//引入 Nodejs events 事件模块
var EventEmitter = new events.EventEmitter();//创建 eventEmitter对象
   
//绑定事件及事件的处理程序是eventEmitter.on('eventName',eventHandler)
EventEmitter.on('toSendMessage',function(){ //function即是handler
    //业务逻辑 do something
    console.log('开始发送短信');
    console.log('toSendMessage事件触发并执行完毕');
});

//触发事件  eventEmitter.emit('eventName'); setTimeout方法//2000ms执行事件触发 
setTimeout(function(){
    EventEmitter.emit('toSendMessage'); //此处触发事件
},2000); 

