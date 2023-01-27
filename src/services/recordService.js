const Record = require('../databases/Record')

const getRecordForWorkout = (workoutId) => {
    try {
        const record = Record.getRecord(workoutId);
        return record;
    } catch (error) {
        throw error;
    }
}

module.exports = { getRecordForWorkout }