var server = require("./server");
var route = require("./route")
var handler = require("./handler")


var handle ={};
handle["/"] = handler.home
handle["/home"]=handler.home
handle["/review"]=handler.review
handle["/records"]=handler.records

server.startServer(route.router,handle)