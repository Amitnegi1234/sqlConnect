const {Sequelize}=require('sequelize')

const sequelize=new Sequelize('school','root','Amitnegi123',{
    host:'localhost',
    dialect:'mysql'
});

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log("connected to the database");
    } catch (error) {
        console.log(error);
    }
})()

module.exports=sequelize;















// const mysql=require('mysql2');
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Amitnegi123',
//     database:'school'
// })
// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('connection created');
//     const creationQuery=`create table IF NOT EXISTS students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(30),
//         email VARCHAR(30)
//     )`
//     connection.execute(creationQuery,(err)=>{
//         if(err){
//             console.log(err);
//             connection.end()
//             return;
//         }
//         console.log('table created');
//     })
// })

// module.exports=connection;