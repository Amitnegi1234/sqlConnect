const db=require('../utils/db-connection')

const addEntries=(req,res)=>{
    const {name,email}=req.body;
    const insertQuery='INSERT INTO students(name,email) VALUES (?,?)';
    db.execute(insertQuery,[name,email],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            db.end()
            return
        }
        console.log('data inserted');
        res.status(200).send(`student with name ${name} added successfully`)
    })
}

const updateEntry=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const updatequery=`UPDATE students set name=? where id=?`;
    db.execute(updatequery,[name,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send('student not found')
            return
        }
        res.status(200).send('student name updated')
    })
}
const deleteEntry=(req,res)=>{
    const {id}=req.params;
    const deleteQuery=`DELETE FROM students where id=?`;
    db.execute(deleteQuery,[id],(err,results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            db.end();
            return;
        }
        if(results.affectedRows===0){
            res.status(404).send('student not found')
            return;
        }
        res.status(200).send(`user with id ${id} deleted`)
    })
}

module.exports={
    addEntries,updateEntry,deleteEntry
}