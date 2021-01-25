var events = require("events")//导入事件库events，events是不可见的

// var myevent = new events.EventEmitter();//为EventEmitter创建一个对象

// //等于addlitener增加了一个监听someevent的监听器
// myevent.on("someEvent",function(message){//创建了一个名称为sonmeevent事件
//     //触发后执行function
//     console.log(message);
// })
// myevent.on("someEvent2",function(message){//事件2
//     //触发后执行function
//     console.log(message);
// })

// //事件启动器
// //ent(a,b):监听列表中寻找事件a，然后将参数b传给a相应的function（也就是参数message）
// myevent.emit("someEvent","事件发生了");
// myevent.emit("someEvent2","事件发生了2");

var util = require("util")//工具库，各种工具

var Person = function(name){
    this.name = name;
}

util.inherits(Person,events.EventEmitter)//让Person继承events.EventEmitte

var xiaoming = new Person("xiaoming");
var xiaohong = new Person("小红")

var arr = [xiaoming,xiaohong];

arr.forEach((person)=>{
    //Person继承了emit之后可以用on方法了
    person.on("say",(message)=>{
        console.log(person.name + ":" + message)
    })
    //不同的对象可以创建不同的EventEmitter，需要相应的对象使用emit才能触发
    //且不同对象创建的事件可以同名
})

xiaoming.emit("say","小明说")
xiaohong.emit("say","xiaohongshuo")

var fs = require("fs")