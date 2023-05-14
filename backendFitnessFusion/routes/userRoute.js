const express=require('express')
const {getUser,postUser,updateUser,deleteUser,getById,postUserSignUp,postUserLogin, addActivity,getActivities,getByIdactivity,delactivity,updateactivity}=require("../controller/userController")
const router=express.Router()

router.route("/").get(getUser).post(postUser)
// to send signup data in db we write address like this http://localhost:8000/signup
// below if we change the signup to sign then we will change the address like http://localhost:8000/sign
//  on simple '/' we are using the create function so if we use the .post(postUserSignUp) in '/' so it wil confuse to which one should sellect signup or create so we need to keep some difference that is why we use the path "/signup" to keep difference in post method of 'create' and 'signup' 
router.route("/signup").post(postUserSignUp)
router.route("/login").post(postUserLogin)
router.route("/activities").post(addActivity).get(getActivities)
router.route("/:id").put(updateUser).delete(deleteUser).get(getById)
router.route("/activities/:id").get(getByIdactivity).delete(delactivity).put(updateactivity)
module.exports = router