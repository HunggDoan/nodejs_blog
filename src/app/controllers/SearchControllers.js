

class SearchController {
    index(req, res) {
        res.render('search');
    }

    show(req, res) {
        res.send('xin chao');
    };

};


module.exports =new SearchController;