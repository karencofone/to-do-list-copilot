class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the Express Project!');
    }
}

module.exports = IndexController;