const { Router } = require('express');
const express = require('express');
const UserController = require('../controllers/addDetails');
const path = require('path')
const multer = require('multer')

const router = express.Router()
const storage = multer.diskStorage({ 
    destination:function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){
        console.log(file)
        cb(null,DATE.now() + path.extname(file.originalname))
       
    }
    
  }) 

const upload = multer({storage:storage})

 
router.post('/user/add-details',upload.single('image'),UserController.postDetails)
  

router.get('/user/get-details',UserController.getDetails)


module.exports = router 