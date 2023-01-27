const workoutServices = require('../services/workoutServices')

const getAllWorkouts = (req,res) => {
    const { mode } = req.query
    try {
        const allWorkouts = workoutServices.getAllWorkouts({ mode })
        res.send({status: 'OK', data: allWorkouts})
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data: {error: error?.message || error}})
    }
}

const getOneWorkout = (req,res) => {
   const { params: { workoutId } } = req;
    if(!workoutId)
    {
        res.status(400).send({ status: "FAILED", data:{error: "Parameter can not be empty"}})
    }

    const oneWorkout = workoutServices.getOneWorkout(workoutId)
    res.send({ status: "OK", data: oneWorkout})
}

const createOneWorkout = (req,res) => {
    const { body } = req.body
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        return res.status(400).send({ status: "FAILED", data: "Missing fields" })
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    try {
    const createdOneWorkout = workoutServices.createOneWorkout(newWorkout)
    res.status(201).send({ status: "OK", data: createdOneWorkout})
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data:{ error: error?.message || error}})
    }

}

const updateWorkout = (req,res) => {
    const { body, params: { workoutId } } = req;

    if(!workoutId){
        res.status(400).send({ status: "FAILED", data:{error: "Parameter can not be empty"}})
    }

    const updatedOneWorkout = workoutServices.updatedWorkout(workoutId, body)
    res.send({ status: "OK", data: updatedOneWorkout });

}

const deleteOneWorkout = (req,res) => {
   const { params: { workoutId } } = req;

   if(!workoutId){
    res.status(400).send({ status: "FAILED", data:{error: "Parameter can not be empty"}})
    }

   workoutServices.deleteOneWorkout(workoutId);
   res.status(204).send({ status: "OK"})
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    updateWorkout,
    deleteOneWorkout,
    createOneWorkout
}