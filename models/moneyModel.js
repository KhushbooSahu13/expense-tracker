const mongoose = require("mongoose")
const plm= require("passport-local-mongoose")

// const moneyModel = new mongoose.Schema({
    
//     name :String,
//     password: String,
//     email: String,
//     expenses:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'expense'
//     }]
// })
const moneyModel = new mongoose.Schema(
    {
        image: String,
        username: String,
        password: String,
        email: String,
       
        token: {
            type: Number,
            default: -1,
        },
        expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "expense" }],
    },
    { timestamps: true }
);
moneyModel.plugin(plm)


module.exports = mongoose.model("money",moneyModel)