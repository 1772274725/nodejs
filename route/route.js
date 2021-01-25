var fs =  require("fs")
function router(pathname,handle,res){
    console.log("路由选择"+pathname)
    if (typeof handle[pathname] ==="function"){
        //如果对应属性返回的是function的话（找到了）执行function
        handle[pathname](res);
    }else{
        //没找到的时候就404了
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.ReadStream(__dirname + "/404.html","utf-8").pipe(res)
    }
}

module.exports.router =router