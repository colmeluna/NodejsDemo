var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
   console.log('printf 监听器 listener1 执行。');
}
var listener2 = function listener2() {
  console.log('printf 监听器 listener2 执行。');
}
eventEmitter.addListener('connection', listener1); //addListener 为指定事件添加一个监听器到监听器数组的尾部。
eventEmitter.on('connection', listener2);          //on 绑定事件


//获取当前监听个数。
//var eEmitter = new events.EventEmitter();
//var count = eEmitter.listenerCount(eventEmitter,'connection');
var count = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(count + "个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');
// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");
// 触发连接事件
eventEmitter.emit('connection');

var count2 = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(count2 + "个监听器监听连接事件。");
console.log("以上实例程序执行完毕.");

