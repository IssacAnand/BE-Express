/* eslint-disable no-undef */
require('dotenv').config() // loads the variables from the .env file

const PORT = process.env.PORT

// tenary operation
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = { MONGODB_URI, PORT }