const router = require('express').Router();
const Todo = require('../modals/todo');

router.get('/', function (req, res) {

    Todo.find({}).then((todos,err) => {

        if(err){
            console.log('Error in fetching contacts from db!');
            return;
        }
        return res.render("../views/home.ejs", {todo : todos});
    });
});

router.get('/delete-task', function(req, res) {

    let id = req.query.id;

    Todo.findByIdAndDelete(id).then((success) => {

        if(success) {
            return res.redirect('back');
        }
        else{
            console.log("Error in deleting contact from database");
            return;
        }
    });
});

router.use('/add/todo', require('./todos'));

module.exports = router;