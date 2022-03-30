var Userdb = require('../model/model');

//this is to create and save new user on MongoDB
exports.create=(req,res)=>{
    //to help ident on the terminal when the user tried to save without entering any details.
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }
    //creating a new user.
    const user = new Userdb({
        name: req.body.name,
        lname: req.body.lname,
        usergroup: req.body.usergroup,
        userlang: req.body.userlang,
        username: req.body.username,
        password: req.body.password,
        area: req.body.area,
        status: req.body.status
    })
    //to save the new user in the database
    user
        .save(user)
        .then(data =>{
            //send the data from the add_user webpage.
            res.redirect("/add_user")
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "That went wrong lol, couldnt create"
            });
        });
}

//this is to show all user from MongoDB
exports.find=(req,res)=>{
    //this will seperate from a single user to group
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:`Cannot find user: ${id}.`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Couldnt find this person"
            })
        })
    }
    else{
        Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Couldnt find this person"
        })
    })
    }

    
}

//this is to update and save new user on MongoDB
exports.update=(req,res)=>{
    //to help ident on the terminal when the user tried to save without entering any details.
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindandModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message:`Cannot update the user: ${id}. Maybe this not not available.`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Couldnt update the user"
            })
        })

}

//this is to delete users on MongoDB
exports.delete=(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message:`Cannot delete the user: ${id}. Maybe its wrong.`})
        }
        else{
            res.send({
                message:"User was deleted"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Couldnt delete the user."
        });
    });

}