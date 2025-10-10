import express from "express";


let configviewEngine = (app) => {
    //arrơw function
    app.use(express.static("./src/public")); // khai bao su dung file static
    app.set("view engine", "ejs"); // khai bao su dung ejs
    app.set("views", "./src/views"); // khai bao thu muc chua file ejs
    
}

module.exports = configviewEngine;