const mongoose = require("mongoose");

const expenseModel = new mongoose.Schema(
    {
        amount: Number,
        remark: String,
        category: String,
        
        paymentmode: {
            type: String,
            enum: ["cash", "online", "cheque"],
        },
        money: { type: mongoose.Schema.Types.ObjectId, ref: "money" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("expense", expenseModel);
