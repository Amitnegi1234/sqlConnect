const express=require('express');
const courseController=require('../controllers/courseController')
const router=express.Router()

router.post('/addCourses',courseController.addCourse)
router.post('/addStudentCourses',courseController.addStudentsToCourses)

module.exports=router;