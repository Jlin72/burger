const express = require('express');
const router = express.Router();

//Importing the index file for use
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all((data) =>{
        const burgerData = {
            burgers: data
        };
        res.render('index', burgerData);
    })
});

router.post('/api/burgers', (req,res) => {
    const newBurgerName = req.body.name;
    burger.addToTable(newBurgerName, (result)=> {
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const id = req.params.id;
    burger.update([req.body.devoured], id,
        (result) => {
        if(result.changedRows === 0){
            return res.status(400).end();
        }
        res.status(200).end();
    })
});

//exporting the router const for use in server.js
module.exports = router;