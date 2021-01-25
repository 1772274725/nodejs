var fs = require("fs");

// fs.unlink("hello.txt",()=>{
//     console.log("删除成功")
// })

// // fs.unlinkSync("hello.txt")
// fs.rmdirSync("syn")
// fs.rmdir("asyn",function(){
//     console.log("异步删除")
// })

fs.mkdir("decade",()=>{
    fs.readFile("hello.txt","utf-8",(error,data)=>{
        fs.writeFile("./decade/deacade.txt",data,()=>{
            console.log("写入成功")
        })
    })
})