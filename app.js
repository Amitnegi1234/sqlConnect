const express=require('express')
const db=require('./utils/db-connection')
const studentRoutes=require('./routes/studentRoutes')

const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello node js")
})
app.use('/students',studentRoutes)

app.listen(3000,()=>{
    console.log("running");
})