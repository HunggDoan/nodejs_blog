const Course = require('../models/Course');
class SiteController {
    
    index(req, res, next) {
        Course.find({}).lean()
        .then(courses => res.render('home',{courses}))
        .catch(next);
    }

        // res.render('home');
    

    show(req, res) {
        res.send('hello');
    };       

}



module.exports =new SiteController;