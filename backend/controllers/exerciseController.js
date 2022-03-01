const Exercise = require('../models/exerciseModel');
const catchAsync = require('../utils/CatchAsync');

module.exports.renderExercises = catchAsync(async(req, res) =>{
        const exercises = await Exercise.find();
        res.send(exercises);
})

module.exports.renderExercise = async(req, res) =>{
    const {id} = req.params;
    const exercise = await Exercise.findById(id);
    res.send(exercise);
}

module.exports.addExercise = catchAsync(async(req,res) =>{
        const { username, description, duration} = req.body;
        const date = Date.parse(req.body.date);

        const newExercise = new Exercise({
            username, description, duration, date
        })

        await newExercise.save();
        res.send('Exercise Added')
})

module.exports.editExercise = catchAsync(async (req,res) =>{
    const {id} = req.params;
    await Exercise.findByIdAndUpdate(id, req.body.exercise);
    res.redirect(`/exercises/${id}`)
})

module.exports.deleteExercise = catchAsync(async(req,res) =>{
    const {id} = req.params;
    await Exercise.findByIdAndDelete(id);
    res.send('Exercise deleted!')
})
