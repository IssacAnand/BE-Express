/*
Process : local Node.js object containing info abt current process
argv: argument vector :  array containing all cli argumnents

process.argv -> always include 2 by default

e.g. node  myapp.js
process.argv[0] = path to node
process.argv[1] = path to myapp.js

*/

/*
Mongoose makes working with MongoDB easier by:

  Defining schemas (structure of your data)

  Providing built-in validation

  Offering easy query methods (like find(), save(), deleteOne())

  Handling connections to MongoDB
*/

// This file only defines the Schema
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

//env -> var stored outside code that program can access
// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)

  .then(() => {

    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

// schema - define structure
const noteSchema = new mongoose.Schema({
  // improved way of validating data by adding constraints to the content field
  content: {
    type: String,
    minlength: 5,
    required: true, // cannnot be missing
  },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

//Model -> actual tool to create/manipulate data based on schema
module.exports = mongoose.model('Note', noteSchema)