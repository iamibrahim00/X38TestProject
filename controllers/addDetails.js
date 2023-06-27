const User = require('../models/User');
const sequelize = require('../util/database');



const postDetails =  async (req,res,next) =>{
    try{

    const {firstName, lastName, email, phone, address,companyName} = req.body;
    const images = req.file
    const details = await User.create({ firstName, lastName, email, phone,address,companyName,images})
   
            return res.status(201).json({details, success: true } );
        
    }catch(err){
       console.log(err)   
         
       
    }
} 

const getDetails = async(req,res,next)=>{
    try{
        const details = await User.findAll();
        res.status(200).json({allDetails : details,success:true})
    }catch(err){
        console.log(err)
    }
   
}



   

  module.exports={
    postDetails,
    getDetails,

  }