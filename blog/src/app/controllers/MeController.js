const Courses = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController{

   
    //[GET] /me/stored-courses
    storedCourses (req, res, next) {

        Promise.all([Courses.find({}), Courses.countDocumentsDeleted()])
        .then(([courses,deleteCount]) => 
            res.render('me/stored-courses', {
                deleteCount,
                courses : mutipleMongooseToObject(courses)
        })
        )
        .catch(() => {});

        // Courses.countDocumentsDeleted()
        // .then((deleteCount) => {
        //     console.log(deleteCount);
        // })
        // .catch(() => {});


        // Courses.find({})
        //     .then(courses =>   res.render('me/stored-courses', {
        //         courses : mutipleMongooseToObject(courses)
        // }))
        //     .catch(next);
        }

    //[GET] /search
    trashCourses(req, res, next) {

        Courses.findDeleted({})
        .then(courses =>   res.render('me/trash-courses', {
            courses : mutipleMongooseToObject(courses)
    }))
        .catch(next);

    }
}

module.exports = new  MeController();