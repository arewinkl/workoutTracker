const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema( {
    day: {
        type: Date,
        default: Date.now()
    },
    exercise:[
         {
            name: {
                type: String,
                trim: true,
                required: "enter name of exercise"
            },
            type: {
                type: String,
                trim: true,
                required: "enter the type of exercise"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                trim: true,
                required: "how long was your workout"
            },
            distance: {
                type: Number
            }
        }
    ]

});
// },

// //required for virtuals
// {
//     toJSON: {
//         virtuals: true
//     }




// WorkoutSchema.virtual("totalDuration").get(function(){
//     let total = 0;
//     exercisesArr = this.exercises
//     //consol log
//     for (let i=0; i < exerciseArr.length; i++) {
//         total += exercisesArr[i].duration;
//     }
//     return total
// });


const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;