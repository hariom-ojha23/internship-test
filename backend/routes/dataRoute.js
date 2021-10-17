import express from 'express'
import getDataDetails from '../controller/dataController.js'

const router = express.Router()

router.route('/').get(getDataDetails)

export default router
