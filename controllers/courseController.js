const Course=require('../models/courses')
const Student=require('../models/students')
const addCourse=async(req,res)=>{
    try {
        const {name}=req.body;
        const course=await Course.create({
            name:name 
        })
        res.status(201).json(course)
    } catch (error) {
        res.status(500).send('unable to add course')
    }
}

const addStudentsToCourses=async(req,res)=>{
    // {
    //     "StudentId":1,
    //     "courseId":[1,2]
    // }
    try {
        const {StudentId,courseId}=req.body;
        const student=await Student.findByPk(StudentId)
        const courses=await Course.findAll({
            where:{
                id:courseId
            }
        })
        await student.addCourses(courses)
        const updatedStudent=await Student.findByPk(StudentId,{include:Course})
        res.status(200).json(updatedStudent)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports={
    addCourse,addStudentsToCourses
}