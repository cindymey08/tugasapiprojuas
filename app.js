// (1)definisi module/middleware
const express = require("express")
const app = express()
const mongoose =require('mongoose')
const bodyParser =require('body-parser')
const { config } = require("dotenv")
require('dotenv/config')

//(6) middlaware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//(7)import routes
const jilbabRoutes = require('./routes/jilbab')

//(8)app.use(mendaftarkan middleware baru ke express)
app.use('/jilbab',jilbabRoutes)

// (3)koneksi ke data base mongodb
mongoose.connect(process.env.DB_CONECTION,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection
// handell eror :jika user/pasword monggo db salah
db.on('error',console.error.bind(console,'koneksi ke mongoDB error'))

// succes :user/pasword mongodb benar
db.once('open',()=>{
    console.log('Terhubung ke database mongodb');
})

// (2)listen port
app.listen(process.env.PORT,() =>{
    console.log(`server berjalan pada port ${process.env.PORT}`);
})
