var http=require("http");
var fs=require("fs");

http.createServer(function (req,res) {
    var url=req.url;
    switch (url){
        case '/index.html':
            fs.readFile("index.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=UTF8"});
                    res.end(data);
                }
            });
            break;
        case '/index2.html':
            fs.readFile("index2.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case '/index3.html':
            fs.readFile("index3.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case '/index.js':
            fs.readFile("index.js","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type":"text/javascript;chartset=utf8"});
                    res.end(data);
                }
            });
            break;
        case '/index.css':
            fs.readFile("index.css","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type":"text/css;chartset=utf8"});
                    res.end(data);
                }
            });
            break;
        case '/a.jpg':
            fs.readFile("a.jpg",function (err,data) {
                if(err){
                    console.log("读取图片失败");
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type": "image/jpeg"});
                    res.end(data);
                }
            });
            break;
        default:
            res.end("404 not found");
    }
}).listen(3000);
