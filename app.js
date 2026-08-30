const express=require('express')
const mysql=require('mysql2')
const app=express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Amitnegi123',
    database:'school'
})
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('connection created');
    const creationQuery=`create table students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30),
        email VARCHAR(30)
    )`
    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end()
            return;
        }
        console.log('table created');
    })
})


app.get('/',(req,res)=>{
    res.send("hello node js")
})

app.listen(3000,()=>{
    console.log("running");
})