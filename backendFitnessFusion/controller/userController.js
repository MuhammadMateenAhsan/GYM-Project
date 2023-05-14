const Contactus = require("../models/ContactusModel")
const Auth = require("../models/Auth")
const Addactivity = require("../models/Addactivity")

const getUser=async(req,res)=>{
    
    try{
        const data = await Contactus.find();
        res.status(200).send(data)
    }catch(err){
        res.status(500).send(err)
    }
}
// API for Signup function
const postUserSignUp=async(req,res)=>{
    const data = await Auth(req.body)
    try {
        const userAlreadyExist = await Auth.findOne({
            email:req.body.email
        })
        if(userAlreadyExist){
res.json("user already exist")
        }else{
            data.save()
res.json("Signup successfully")
        }
    } catch (error) {
res.json("Signup error")
        
    }
}

// API for Login function
const postUserLogin = async(req,res)=>{
    try {
        const userAlreadyExist = await Auth.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(userAlreadyExist){
            res.status(200).json({
                message: "Login successful",
                userAlreadyExist,
              })

        }else{
res.json("error: Email or password is incorrect.")
        }
    } catch (error) {
res.json("Login error")
        
    }
}

// get by id and use PUT method to edit/update
const getById=async(req,res)=>{
    
    try {
        const User=await Contactus.findById(req.params.id);
        res.json(User) 
    } catch (error) {
        res.send(error)
    }
}

// to add a new user to the db
const postUser=async(req,res)=>{
    try{
        const User=await Contactus(req.body);
        const data=await User.save();
        console.log(data)
        res.json(data) //used to send data in db
    }catch(error){
console.log(error)
    }
}

const updateUser=async(req,res)=>{
    const id = req.params.id;
    const update = req.body; // Assumes the update data is in the request body
//   the purpose of { new: true } is it update with no-time 
try {
   let data=await Contactus.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        
    }  );
    const a=await data
    res.json(a)     
} catch (error) {
    console.log("error in update ")
}
    
}

const deleteUser=async(req,res)=>{
    
   
try {
    
    const User=await Contactus.findByIdAndDelete(req.params.id);
    const variable=await User()
    res.json(variable) 
} catch (error) {
    res.send(error)
}


}

// function to add new activity in db

const addActivity = async(req,res)=>{
    try{
        const User=await Addactivity(req.body);
        const data=await User.save();
        console.log(data)
        res.json(data) //used to send data in db
    }catch(error){
console.log(error)
    }
}
    // get all activities
    const getActivities=async(req,res)=>{
    
        try{
            const data = await Addactivity.find();
            res.status(200).send(data)
        }catch(err){
            res.status(500).send(err)
        }
    }
// function to get by ID 
    const getByIdactivity=async(req,res)=>{
    
        try {
            const User=await Addactivity.findById(req.params.id);
            res.json(User) 
        } catch (error) {
            res.send(error)
        }
    }
// function to delete by id 
const delactivity=async(req,res)=>{
    try {
        const activity=await Addactivity.findByIdAndDelete(req.params.id);
        const variable=await activity()
        res.json(variable) 
    } catch (error) {
        res.send(error)
    }
}

//   update activity
const updateactivity = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
  
    try {
      const updatedactivity = await Addactivity.findOneAndUpdate({ _id: id }, update, { new: true });
      res.json(updatedactivity);
    } catch (error) {
      console.log("error in update ", error);
      res.sendStatus(500);
    }
  };
module.exports={getUser,postUser,updateUser,deleteUser,getById,postUserSignUp,postUserLogin, addActivity,getActivities,getByIdactivity,delactivity,updateactivity}