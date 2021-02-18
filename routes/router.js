const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

router.get("/api/workoutModel",(req,res)=>
    {
        Workout.find({})
        .then(dbWorkout => 
            {
                res.json(dbWorkout);
            })
        .catch(err =>
            {
                 res.json(err)
            })
    })

router.post("/api/workoutModel",(req,res)=>
    {
        Workout.create({})
        .then(dbWorkout => 
                {
                    res.json(dbWorkout);
                })
        .catch(err =>
            {
                res.json(err)
            })
    })  