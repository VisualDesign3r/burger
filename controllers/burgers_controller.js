const express = require('express');
const router = express.Router();
const burger = require('../config/orm')

router.get('/', function(req,res){
    burger.selectAll(function(data){
        res.render('index', {burgers: data})
    })
})

router.post('/api/burger', function(req,res){
    burger.createNew(req.body.name, function(){
        console.log('redirecting!')
        res.send('ok')
    })
})

router.get('/jose', function(req,res){
    res.render('jose', {isLogged: false})
})

router.put('/api/burger/:id', function(req,res){
    burger.update(req.params.id, function(){
        res.send('updated!')
    })
})



module.exports = router;