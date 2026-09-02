const express=require('express')
const db=require('./utils/db-connection')
const studentRoutes=require('./routes/studentRoutes')
const studentModel=require('./models/students')

const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello node js")
})
app.use('/students',studentRoutes)
db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log("running");
})
}).catch((err)=>{
    console.log(err);
})

