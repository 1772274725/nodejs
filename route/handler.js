var fs = require("fs")

function home(res){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.ReadStream(__dirname + "/index.html","utf-8").pipe(res) 
}
function review(res){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.ReadStream(__dirname + "/test.html","utf-8").pipe(res)
}
function records(res){
    res.writeHead(200,{"Content-Type":"application/json"})
    var me = {
        name:"cyclone",
        job :"rider",
        age :27
    }
    res.end(JSON.stringify(me))
}

module.exports={
    home:home,
    review:review,
    records:records,
}