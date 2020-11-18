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
        db.Workout.update({id: req.params.id}, {$push: {exercises: req.body}})
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