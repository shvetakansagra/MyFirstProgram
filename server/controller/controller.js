const { create } = require('../model/model');
const Userdb = require('../model/model');
const moment = require('moment');

//create and save new user
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message :"Content can not be emplty!"});
        return;
    }

    //new user
    const user =new Userdb({
        Fname :req.body.Fname,
        Lname :req.body.Lname,
        FullName :req.body.FullName,
        Email :req.body.Email,
        DOB :req.body.DOB,
        Age :req.body.Age  ,
        Gender :req.body.Gender,
        Hobbies :req.body.Hobbies,
        Phone :req.body.Phone,
        Address :req.body.Address,
        Status :req.body.Status,
        
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/views/Add_Data.html');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occurred while creating a create operation"
            });

        });

}

//retrieve and return users/retrieve and return a single users
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not Found User with id" + id })
                    } else {
                        res.send(data)
                    }
            })
            .catch(err => {
                res.status(500).send({ message: "error retriving user with Id" +id});
            });
    }
    else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "some error occurred while creating a create operation"
                });
            });
        }
    }

//update a new identifed user by User id
exports.update = (req, res) => {
    console.log("000000000",body);
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emplty!" });
        return;
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}.Maybe user not found` });
            }
            else {
                res.send(data)
                console.log("111111111111",data);
            }
        })
        console.log("7777777777777777",id, req.body)
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error Update user information"
            })
        })
}
//delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log("idididididid",id);
    Userdb.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Data was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Data with id=" + id
      });
    });
};