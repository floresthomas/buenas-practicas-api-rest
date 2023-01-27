const Workout = require('../databases/Workout');
const {v4: uuid} = require('uuid')

const getAllWorkouts = (filterParams) => {
    const allWorkouts = Workout.getAllWorkouts(filterParams)
    return allWorkouts
} 
const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId)
    return workout;
} 
const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId)
} 

const updatedWorkout = (workoutId, changes) => {
    const updatedOneWorkout = Workout.updateWorkout(workoutId, changes)
    return updatedOneWorkout
}

const createOneWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timezone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC"})
    }
    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout;
} 

module.exports = { getAllWorkouts , getOneWorkout, deleteOneWorkout, createOneWorkout, updatedWorkout}