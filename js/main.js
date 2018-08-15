// let http = require('http');


// http.createServer((request,response) => {
//     response.writeHead(200,{"content-type":"text/plain"});
//     response.end("hello world!");
// }).listen(8080);

// console.log("server is linstening to the port");
// console.log(__dirname);
// console.log(__filename);
// const fs = require("fs");
// fs.readFile("main1.js",(err,data) => {
//     if(err){console.log(err);}
//     else{console.log(data);}
// });

// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password: "root"
// });
// con.connect((err) => {
//     if(err){console.log("error in connecting to the database!");}
//     else {
//         console.log("connected succussfully!");
//         con.query("show databases",(err, data) => {
//             if(err) throw err;
//             console.log("databases fetched");
//             console.log(data);
//         })
//     }
// });

//working with the express.js
const express = require('express');
const app = express();
app.get("/process_get",(req, res) => {
    res.send('<p>'+ req.param('first_name')+'</p>'+'<p>'+req.param('last_name')+'</p>');
});
const server = app.listen('8080',() => {
    let host = server.address().address;
    console.log("host is ->"+host);
});