const mongoose = require("mongoose")
.connect("mongodb://127.0.0.1:27017/invest")
.then(()=> console.log("connected"))
.catch((error)=>console.log("error"))