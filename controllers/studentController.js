const db=require('../utils/db-connection')
const Student=require('../models/students')
const IdentityCard=require('../models/identityCard')

const addEntries=async(req,res)=>{
    try {
        const {name,email}=req.body;
        const student=await Student.create({
            name:name,
            email:email
        })
        res.status(200).send(`student with name ${name} created`)
    } catch (error) {
        res.status(500).send('unable to make a entry')
    }
    
}

const addingValuesToStudentAndIdentityTable=async(req,res)=>{
    // {
    //     "student":{"name":"john doe", "email":"John@gmail.com"},
    //     "IdentityCard":{"cardNumber":"123345"}
    // }
    try {
        const student=await Student.create(req.body.student)
        const idCard=await IdentityCard.create({
            ...req.body.IdentityCard,
            StudentId:student.id
        })
        res.status(201).json({student,idCard})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}

const updateEntry=async(req,res)=>{
    try {
        const {id}=req.params;
        const {name}=req.body;
        const student=await Student.findByPk(id);
        if(!student){
            res.status(404).send('student not found')
        }
        student.name=name;
        await student.save()
        res.status(200).send('user updated')
    } catch (error) {
        console.log(error);
        res.status(500).send('user cannot updated')
    }
   
}
const deleteEntry=async(req,res)=>{
    try {
        const {id}=req.params;
        const student=await Student.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            res.status(404).send('user not found')
        }
        res.status(200).send('user deleted')
    } catch (error) {
        console.log(error);
        res.status(500).send('unable to delete')
    }
}

module.exports={
    addEntries,updateEntry,deleteEntry,addingValuesToStudentAndIdentityTable
}