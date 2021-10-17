import Data from '../models/data.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all data
// @access Public
// @route GET/
const getDataDetails = asyncHandler(async (req, res) => {
  const data = await Data.find({})
  res.json(data)
})

export default getDataDetails
