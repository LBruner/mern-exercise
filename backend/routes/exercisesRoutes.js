const router = require('express').Router();
const exerciseController = require('../controllers/exerciseController')

router.route('/')
    .get(exerciseController.renderExercises)

router.route('/add')
    .post(exerciseController.addExercise)

router.route('/:id')
    .get(exerciseController.renderExercise)
    .delete(exerciseController.deleteExercise)

router.route('/edit/:id')
    .post(exerciseController.editExercise)
module.exports = router