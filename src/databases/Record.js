const DB = require("./db.json")

const getRecord = (workourId) => {
    try {
        const record = DB.records.filter((record) => record.workout === workourId)
        if(!record){
            throw{
                status: 400,
                message: 'Can not find workout with the id'
            }
        }

        return record;
    } catch (error) {
        throw{ status: error?.status || 500, message: error?.message || error}
    }
}

module.exports = { getRecord }