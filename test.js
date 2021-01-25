let test2 = ()=>console.log("文件名"+__filename)

module.exports ={
    test1:test2,
    str :"cyclone"
}
//test1是导出之后的名字，test2是该文件要导出的东西