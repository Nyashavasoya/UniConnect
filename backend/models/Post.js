const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    title :{
        type : String,
        required : true,
    },

    caption : String,
    
    image:{
        public_id:String,
        url: String,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    likes:{
        type:Number,
        default : 0,
    },
    dislikes:{
        type: Number,
        default : 0,
    },
    comments:[
        {
            user: mongoose.Schema.Types.ObjectId,
            type:String,
            required:true,
        },
    ]
})

module.exports = mongoose.model("POST",postSchema);