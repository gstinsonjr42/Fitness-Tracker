const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:
    {
        type: Date,
        default: Date.now
    },
    exercises: 
    [
        {
            type:{
                type: String,
                trim: true,
                required: "Enter the type of workout you are performing"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of the workout you are performing."
            },
            duration: {
                n
            }
        }
    ]
})