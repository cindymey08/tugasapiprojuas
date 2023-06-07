//(5)buat router
const express = require('express')
const router = express.Router()
const Jilab = require('../models/Jilbab')
const Jilbab = require('../models/Jilbab')

//create api for
router.post('/',async(req,res) =>{
    //Tampung dulu input 
    const jilbabPost = new Jilbab({
        nama:req.body.nama,
        jenis:req.body.jenis,
        warna:req.body.warna,
        image:req.body.image

    })
    //simpan data dengan try catch
    try{
        //simpan data nya
        const jilbab = await jilbabPost.save()
        //beri response 
        res.json(jilbab)
    }catch(error){
        res.json({message:error})
    }
   
})
//read data(membaca data)
router.get('/',async(req,res)=>{
    try{
        const jilbab=await Jilbab.find()
        res.json(jilbab)
    }catch(error){
        res.json({message:error})
    }
})

router.put('/:jilbabId',async(req,res)=>{
    const data = {
        nama:req.body.nama,
        jenis:req.body.jenis,
        warna:req.body.warna,
        image:req.body.image
    }
    try{
        const jilbab =await Jilbab.updateOne({_id:req.params.jilbabId}, data)
        res.json(jilbab)
    }catch (error){
        res.json({message:error})
    }
})

router.delete('/:jilbabId',async(req,res)=>{
        try{
            const jilbab =await Jilbab.deleteOne({_id:req.params.jilbabId})
            res.json(jilbab)
        }catch (error){
            res.json({message:error})
        }
 })


module.exports= router
