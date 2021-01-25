var http = require("http");
var fs = require("fs")

function startServer(){

    var html1 = (req,res)=>{
        //响应内容为json,传入的必须是对象
        res.writeHead(200,{"Content-Type":"text/html"});
        let myhtml = fs.createReadStream(__dirname + "/test.html","utf-8");
        myhtml.pipe(res)//通过pipe直接将html文件传入res的end
    }
    var server = http.createServer(html1);
    
    server.listen(3000);
    console.log("响应成功")
}

exports.startServer = startServer