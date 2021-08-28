const Courses = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController{

    //[GET] /
    index(req, res, next) {

        // Courses.find({}, function(err, courses){
        //     if(!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(404).json({error: 'ERROR !!!!!'});
        //     }
        // });

        Courses.find({})
        .then(courses =>  {
            res.render('home', {
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);

          

        // res.render('home');
    }

    //[GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new  SiteController;