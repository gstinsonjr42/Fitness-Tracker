const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:
    {
        type: Date,
        default: new Date().setDate(new Date().getDate()-10)
    },
    exercises: 
    [
        {
            type:{
                type: String,
                trim: true,
                required: "Enter the type of exercise you are performing"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise you are performing."
            },
            duration: {
                type: Number,
                required: "Enter the duration of the exercise you are performing"
            },
            weight:{
                type: Number
            },
            reps: {
                type: Number
            },
            sets:{
                type: Number
            },
            distance:{
                type:Number
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;