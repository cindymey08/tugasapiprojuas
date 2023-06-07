// (4)buat schema 
const mongoose = require('mongoose')

const JilbabSchema= mongoose.Schema({
    
    nama:{
        type:String,
        required:true
    },
    jenis:{
        type:String,
        required:true
    },
    warna:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },

   
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
module.exports= mongoose.model('Jilab',JilbabSchema)