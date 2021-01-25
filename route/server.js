var http = require("http");
var fs = require("fs")

function startServer(route,handle){
    var onRequest = (req,res)=>{
        console.log("request:" + req.url)//代表接受的路由是什么
        console.log("连接成功");

        // 重构
        route(req.url,handle,res);


    //     通过if来路由选择
    //     if (req.url === "/" || req.url === "/home"){
    //         res.writeHead(200,{"Content-Type":"text/html"});
    //         fs.ReadStream(__dirname + "/index.html","utf-8").pipe(res)
    //     }else if (req.url === "/review"){
    //         res.writeHead(200,{"Content-Type":"text/html"});
    //         fs.ReadStream(__dirname + "/test.html","utf-8").pipe(res)
    //     }else if (req.url ==="/api/vi/records"){
    //         res.writeHead(200,{"Content-Type":"application/json"})
    //         var me = {
    //             name:"cyclone",
    //             job :"rider",
    //             age :27
    //         }
    //         res.end(JSON.stringify(me))
    //     }else{//找不到就返回404
    //         res.writeHead(200,{"Content-Type":"text/html"});
    //         fs.ReadStream(__dirname + "/404.html","utf-8").pipe(res)
    //     }
    // }
    }
    var server = http.createServer(onRequest);
    server.listen(3000);
    console.log("服务打开")

}
module.exports.startServer = startServer