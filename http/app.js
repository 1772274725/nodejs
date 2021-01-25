var http = require("http");

var fun1 = (req,res)=>{
    //第一个是请求流，第二个是响应流，是流的实例，可以和流一样操作
    //req是浏览器带来的请求，响应是还给浏览器的
    console.log("响应成功");
    //writeHead数据报头写
    res.writeHead(200,{"Content-Type":"application/json"})//200状态码代表成功
    //第二个参数是对象，用来设置各种头部参数
    //Content-Type:是传输的内容类型，pdf文本或者图片
    //text/plain为纯文本
    res.write("这个是写在页面上的")
    res.end("服务结束")//end方法表示结束了
}
//创建了一个服务
var server = http.createServer(fun1)

server.listen(3000,"127.0.0.1")//监听端口3000
console.log("project on")