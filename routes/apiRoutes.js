let db = require("../models")


module.exports = function(app) {
    //get all
    app.get("/api/workouts", function(req, res){
        db.Workout.find({})
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    // post route for the data
    app.post("/api/workouts", function(req, res){
        db.Workout.create({
            day: new Date().setDate(new Date().getDate()),
        })

        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    // route to update the workout entry
    app.put("/api/workouts/:id", function(req, res){
        db.Workout.update({_id: req.params.id,}, {$push: {exercises: req.body,},},
            (error, data) => {
                if (error) {
                    res.json(error);
                }else {
                    res.json(data);
                }
            });
       
        
    });

    //make route with a range
    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.json(err);
        });
    });
};