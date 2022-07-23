const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require('cors')
const { coursesModel } = require("./model/courseModel")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://Shibin:123lavender@cluster0.cuad3.mongodb.net/CollegeDB?retryWrites=true&w=majority")


app.post("/addcourse",async (req,res)=>{
    const data=req.body
    const ob=new coursesModel(data)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else{
            res.send(data)
        }
    })



    //res.send("welcome to addcourse")
})

app.get("/viewcourse",async (req,res)=>{
   
    coursesModel.find((error,data)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data)
        }
    }
    )
})

app.get("/searchcourse",(req,res)=>{
    res.send("welcome to searchcourse")
})

app.get("/updatecourse",(req,res)=>{
    res.send("welcome to updatecourse")
})

app.get("/deletecourse",(req,res)=>{
    res.send("welcome to deletecourse")
})

app.listen(3000,()=>{
    console.log("server running")
})