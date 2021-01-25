const fs = require("fs");

var mystring = fs.createReadStream(__dirname + "/readme.txt","utf-8");

var mywrite = fs.createWriteStream(__dirname + "/wirteme.txt");
mystring.pipe(mywrite)
// var data = ""
// mystring.on("data",function(chunk){
//     //这个data是特殊的事件，用于接收数据
//     //当绑定到data事件的时候回自动触发data事件
//     // console.log("读取到新的流了")
//     // console.log(chunck)//长文件不会一次性处理，会把文件分成一段段处理

//     // data += chunk; 
//     mywrite.write(chunk)//流写入
// })

// mystring.on("end",()=>{
//     console.log("复制完成")
// // })
// var wrteData = "cyclonejoker"
// mywrite.write(wrteData,"utf-8")
// mywrite.end()//end代表写入结束,end执行完会自动触发finish时间
// mywrite.on("finish",()=>{
//     console.log("写完成")
// })