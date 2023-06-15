const router = require('express').Router();
const Todo = require('../modals/todo');

router.post('/add/todo', function(req, res){

    Todo.create({
        todo : req.body.todo
    }).then(result => {
        console.log(result);
        return res.redirect('back');
    })
});

module.exports = router;