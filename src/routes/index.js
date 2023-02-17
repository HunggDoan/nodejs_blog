const searchRouter = require('./Search')
const siteRouter = require('./site')
const courseRouter = require('./courses')


function router(app) {
    
    app.use('/search', searchRouter)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter) 
    
}
module.exports = router;