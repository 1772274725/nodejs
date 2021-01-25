var fs = require("fs")


//没有sync就是异步
var readme = fs.readFile("readme.txt","utf-8",function(error,data){
    //先在事件队列注册一个读事件，监听事件队列，然后跳过该段，执行主程序
    //等主线程空闲后，监听队列中的返回事件后再执行funciton中的功能
    console.log(data)
    console.log(error)

    fs.writeFile("write.txt",data,()=>{
        console.log("写完了")
    })
})

// console.log(readme)不能直接传给readme变量要早上面的function中传给变量

for (let i = 1 ; i <=1000000;i++){
    console.log(i)
}
console.log("finish")


