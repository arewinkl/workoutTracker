let db = require("../models")

//get all
module.exports = function(app) {
    app.get("/api/workouts", function(req, res){
        db.Workout.find({})
        .then(function(dbData){
            res.json(dbData);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", function(req, res){
        db.Workout.findOneAndUpdate({"_id":req.params.id}, {$push: {"exercise": req.body}})
        .then(function(dbData){
            res.json(dbData);
        })
        .catch(function(err){
            res.json(err);
        })
        
    });

    app.post("/api/workouts", function(req, res){
        db.Workout.create(req.body)
        .then(function(req, res){
            res.json(dbData);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    //make route with a range
    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
        .then(function(req, res){
            res.json(dbData);
        })
        .catch(function(err){
            res.json(err);
        });
    });
}