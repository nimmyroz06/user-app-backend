const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const {usermodel} = require("./models/user")

mongoose.connect("mongodb+srv://nimmyroz:roz206@cluster0.svkepzi.mongodb.net/userappDB?retryWrites=true&w=majority&appName=Cluster0")


const app=express()
app.use(cors())//middle ware
app.use(express.json())//middle ware ,to get as json object

app.post("/signup",(req,res)=>{
   // res.send("Add")

  let input = req.body//1.input read,req placed to variable  input 
    //console.log(input)
    //res.send("success")

    let userapp = new usermodel(input)//1.input passed to user app
    console.log(userapp)
    userapp.save()//3.save to db
    res.json({"status":"success"})

})

app.get("/view",(req,res)=>{
    
usermodel.find().then(

(data)=>{

    res.json(data)
}

)


})
app.post("/search",(req,res)=>{
    let input=req.body
    usermodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    )
})

app.listen(8080,(req,res)=>{

    console.log("server started")

})