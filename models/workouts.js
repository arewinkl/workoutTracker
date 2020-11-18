const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema( {
    day: {
        type: Date,
        default: Date.now()
    },
    exercise:[
         {
            type: {
                type: String,
                trim: true,
                required: "enter the type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "enter name of exercise"
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
                type: Number              
            },
            distance: {
                type: Number
            }
        }
    ]

});


const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;

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
