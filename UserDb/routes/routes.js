const express = require('express');
const Model = require('../models/models');
const bcrypt = require("bcrypt");
const { passwordStrength } = require("check-password-strength");

const router = express.Router()

//Post Method
router.post('/create', async (req, res) => {

    // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Body content can not be empty",
    });
  }

  let userr = await Model.findOne({ email: req.body.email });
  if (userr) {
    return res.status(400).send({
      message: "Duplicate User",
    });
  }

    const emailRegexp =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    const fullnameRegexp =
    /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;

    if (!fullnameRegexp.test(req.body.name)) {
        return res.status(400).send({
          message: "Please enter valid full name!",
        });
      }


  if (!emailRegexp.test(req.body.email)) {
    return res.status(400).send({
      message: "Email not in format!",
    });
  }

  if (passwordStrength(req.body.password).id < 1) {
    return res.status(400).send({
      message: "Weak Password, try again with a harder password",
    });
  }


    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password
    })

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set data password to hashed password
    data.password = await bcrypt.hash(data.password, salt);

    // Save Note in the database
  data
  .save()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the data.",
    });
  });
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.send("Error while fetching data!")
    }
})

//Get by email and password
router.get('/getOne/:email', (req, res) => {
    res.send(`Email : ${req.params.email}`)
})

//PUT Method
router.put('/edit/:name', async (req, res) => {
    try{

        const fullnameRegexp =
        /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;

        if (!fullnameRegexp.test(req.body.name)) {
            return res.status(400).send({
            message: "Please enter valid full name!",
            });
        }

        if (passwordStrength(req.body.password).id < 1) {
            return res.status(400).send({
              message: "Weak Password, try again with a harder password",
            });
          }
        let updatename = req.params.name;

        let uppwd = req.body.password;
        let upname = req.body.name;

        const data1 = new Model({
            name: req.body.name,
            
            password : req.body.password
        })

        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        data1.password = await bcrypt.hash(data1.password, salt);

        Model.findOneAndUpdate({name:updatename}, {$set:{name:upname,password:data1.password}},{new:true},(err,data1) => {
            if(data1==null) {
                res.send("Please verify if all user details are correct. NOTE : Email ID cannot be updated")
            }else {
                res.send(data1)
            }

        })
    }
    catch(error){
        res.status(500).json({message: error.message})
        //res.send("not sure bro")
    }
})
   

//Update by ID Method
router.patch('/update/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            name, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const data = await Model.findOneAndDelete(email)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.send("data not found. Please check the email entered")
    }
})


module.exports = router;