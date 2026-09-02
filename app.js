const express=require('express')
const mysql=require('mysql2')
const app=express();



const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Amitnegi123',
    database:'bus'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('connection created');
    const usersQuery=`
        create table users(
            id int auto_increment primary key,
            name varchar(255),
            email varchar(255) unique    
        )
    `;
    const busesQuery=`
        create table buses(
            id int auto_increment primary key,
            busNumber varchar(250),
            totalSeats int,
            availableSeats int
        )
    `
    const bookingQuery=`
        create table bookings(
            id int auto_increment primary key,
            seatNumber int
        )
    `
    const paymentQuery=`
        create table payment(
            id int auto_increment primary key,
            amountPaid int,
            paymentStatus varchar(255)
        )
    `


    connection.execute(usersQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('users table created successfully');
        connection.execute(busesQuery,(err)=>{
            if(err){
                console.log(err);
                connection.end()
                return;
            }
            console.log("bus table created");
            connection.execute(bookingQuery,(err)=>{
                if(err){
                    console.log(err);
                    connection.end();
                    return;
                }
                console.log('booking table created');
                connection.execute(paymentQuery,(err)=>{
                    if(err){
                        console.log(err);
                        connection.end();
                        return;
                    }
                    console.log('payment table created');
                })
            })
        })
    })
})

app.get('/',(req,res)=>{
    res.send("hello node js")
})

app.listen(3000,()=>{
    console.log("running");
})