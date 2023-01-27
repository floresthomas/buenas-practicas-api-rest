const express = require('express');
const workoutController = require('../../controllers/workoutController')
const recordController = require('../../controllers/recordController')

const router = express.Router()


/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get('/' , workoutController.getAllWorkouts)
router.get('/:workoutId', workoutController.getOneWorkout)
router.get('/:workoutId/record', recordController.getRecordForWorkout)
router.post('/', workoutController.createOneWorkout)
router.patch('/:workoutId', workoutController.updateWorkout)
router.delete('/workoutId', workoutController.deleteOneWorkout)

module.exports = router;