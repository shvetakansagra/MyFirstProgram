const axios = require('axios');
const moment = require('moment');
exports.homeRoutes = (req, res) => {
    //make get request to api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.Add_Data=(req,res)=>{
    res.render('Add_Data');
}

exports.update_Data=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
        .then(function(userdata) {
         res.render("update_Data",{user:userdata.data})
        })
        .catch(err => {
        res.send(err);
        })
}
