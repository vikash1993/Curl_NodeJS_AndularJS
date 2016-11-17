var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Node = require('../model/model');

router.get('/index', function(req, res) {
        Node.find(function(err, todos) {
            if (err){
                res.send(err)
            }
            res.json(todos); // return in JSON 
        });
    });


router.post('/index', function(req, res){
	var newNode = new Node({
		Firstname: req.body.Firstname,
		Lastname: req.body.Lastname,
		email: req.body.email,
		Designation: req.body.Designation,
		dob: req.body.dob
	});
	newNode.save(function(err){
		if(err){
			console.log('save error' + err);
		}
		res.json({result: err ? 'error' : 'data save success'});
		});
	});

		//delete data
router.delete('/index/:id', function(req, res){
		var id = req.params.id;
		//console.log("hiiiiiiiiiii:-", id);
        Node.findById({_id: id},function(err, data) {
            // Delete the data
            data.remove(function(err, data) {
                if (err){
                    res.send(err);
                	}else{
                	//console.log(data);
                	res.json({ message: 'Data Delete!' });
            	}
            });
        });
	});


//Update section
router.put('/index/:id', function(req, res){
	//console.log("hiiiiii:"+ req.params.id);
	Node.findById({_id: req.params.id},function(err, data) {
            data.Firstname = req.body.Firstname;  // update the data info
            data.Lastname = req.body.Lastname;
            data.email = req.body.email;
            data.Designation = req.body.Designation;
            data.dob = req.body.dob;
            // save the data
            data.save(function(err, data) {
                if (err){
                    res.send(err);
                	}else{
                	//console.log(data);
                res.json({ message: 'data updated!' });
            	}
            });
        });
	});
 

module.exports = router;
