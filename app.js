const express=require('express')
const db=require('./utils/db-connection')
const studentRoutes=require('./routes/studentRoutes')
const courseRoutes=require('./routes/courseRoutes')
// const studentModel=require('./models/students')
require('./models')

const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello node js")
})
app.use('/students',studentRoutes)
app.use('/courses',courseRoutes)
db.sync({force:false}).then(()=>{
    app.listen(3000,()=>{
    console.log("running");
})
}).catch((err)=>{
    console.log(err);
})

