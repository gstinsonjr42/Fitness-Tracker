const path = require("path")
const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

router.get("/api/workouts",(req,res)=>
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

router.post("/api/workouts",(req,res)=>
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
router.get("/api/workouts/range", (req, res) => 
    {
        Workout.find({})
        .then(dbWorkout =>
            {
                res.json(dbWorkout);
            })
        .catch(err => 
            {
                res.json(err);
            });
    });

    router.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
          params.id,
          { $push: { exercises: body } },
      
          { new: true, runValidators: true }
        )
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });

/*router.put("/api/workouts/:id",(req,res)=>
    {
        Workout.findById({})
        .then(dbWorkout =>
            {
                res.json(dbWorkout);
            })
        .catch(err => 
            {
                res.json(err);
            });
    })*/
       
router.get("/exercise", 
    function(req, res)
        {
            res.sendFile(path.join(__dirname, "../public/exercise.html"));
        });

router.get("/stats", 
    function(req, res)
        {
            res.sendFile(path.join(__dirname, "../public/stats.html"));
        });

module.exports = router;