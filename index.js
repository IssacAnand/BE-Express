/* 
BE -> Utlizie most of the modern ES6 syntax w/o transpilation (i.e making backward compatible)


FE-> Must use babel/typescript to compile and make it Backward compatible
Must bundle and need to configure tooling (e.g. Webpack, vite)


Communication between backend and frontend is indepednant of version

exchange data via standardized formats

    API contract (endpoints, data structures)
    Authentication methods
    Error handling patterns
    Data validation


TLDR 

Backend: Write modern code directly, faster iteration
Frontend: Need build tools, longer feedback loops

npm initi -> create package.json, serves as configuration and metadata for project
*/

console.log('hello world')  // Backend -> Code run on server -> i.e. output to comput to terminal
//FE -> code run in browser  -

// const http = require('http') // Node's built in web server module

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' })
//   // Content Type -> tells broweser this is plaintext
//   response.end('Hello World')
// })

// const PORT = 3001
// app.listen(PORT) // bind http to listen at  port 3001
// console.log(`Server running on port ${PORT}`)

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('dist'))


let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

// recap -> event handler is the callback function (same thinf, different name)

/* 
.get is just a method 
function(request, respond) is the callback/event handler - 
it's the function you're passing to the .get() method

//function (request, response)
.send() is just a method belonging to response obj, not callback withtin callback
*/

// entrypoint
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})
/*
HOW TO SPOT EVENT HANDLERS/CALLBACKS

Look for these patterns:
    .on('eventName', function)
    .addEventListener('eventName', function)
    Callback functions in async operations
    Functions passed to methods that "wait" for something

    '/api/notes' => event
    (request, response) => handler/callback function

*/


/* 
JSON vs Javascript Object

JSON
    Just a string of text
    Only data, no functions
    Property names MUST have quotes
    Must be converted to use in code

Javascript Object
    ives in computer memory
    Can have functions, methods, comments
    Property names don't need quotes
    You can use it directly in code


    const person = { name: "John", age: 25 } Javascript Object  
    const jsonString = JSON.stringify(person)
    console.log(jsonString)  // '{"name":"John","age":25}'

    HOT RELOAD
    ith hot reload (like React):

    Save your file
    Changes appear automatically
    No manual steps

*/

// get all ids
app.get('/api/notes', (request, response) => {
  response.json(notes) //gets converted to JSON string for sending only
})

// get specific id
app.get('/api/notes/:id',(req,res)=>{
    const id =req.params.id
    const note = notes.find( note => note.id === id)
     if (note) {
    res.json(note)
  } else {
    res.status(404).send(`Resource ID : ${id} not found`) //.end just sends status code w/o any data
  }

})

//delete id 
app.delete('/api/notes/:id', (req,res)=>{
    const id = req.params.id
    const note = notes.find( note =>{ // function(note) is the call back funtion
        note.id === id
    })
    res.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}
// add note
app.post('/api/notes', (request, response) => {

  const body = request.body // without parsewr, body property would be undefined

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }
  // nothing wrong with push , but concat follows s functional programming principles of immutability
  notes = notes.concat(note) //concat created a new array with note added, rather than modifying exisitng array
  response.json(note)

  //content-type header-> tells browser(client) what kind of data is being send
  /*
    .send () -> send data and set content-type header automatically based on what is sent
    .json() -> send JSON string only
    .end() -> end response w/o sending any data
  */
})
 // const prevents reassignment, not mutation:
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

