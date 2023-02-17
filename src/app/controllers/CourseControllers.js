const Course = require('../models/Course');
class CourseController {
        show(req, res, next) {
            Course.findOne({ slug: req.params.slug}).lean()
            .then(courses =>  res.render('./courses/show', {courses}))
            .catch(next);
            
    };

        create (req, res, next){
            res.render('./courses/create')
        }

        // post a new course    
        store(req, res, next){
            const course = new Course(req.body);
            course.save();
        }

};


module.exports =new CourseController;