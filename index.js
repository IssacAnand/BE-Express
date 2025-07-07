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
How data looks like

In Server (JS Object)

In transit (JSON string)

In client (JS Object)

 HOT RELOAD
    ith hot reload (like React):

    Save your file
    Changes appear automatically
    No manual steps


    // recap -> event handler is the callback function (same thinf, different name)

/*
.get is just a method
function(request, respond) is the callback/event handler -
it's the function you're passing to the .get() method

//function (request, response)
.send() is just a method belonging to response obj, not callback withtin callback
 //content-type header-> tells browser(client) what kind of data is being send
  /*
    .send () -> send data and set content-type header automatically based on what is sent
    .json() -> send JSON string only
    .end() -> end response w/o sending any data
  */

// Middleware order matters

/*1  Static files, body parsers, logging
        app.use(express.static('dist'));
        app.use(express.json());
        app.use(requestLogger);

    // 2. API routes
        app.get('/api/notes', (req, res) => { ... });
        app.post('/api/notes', (req, res) => { ... });

      // 3. Unknown endpoint handler (if no route matched)
        app.use(unknownEndpoint);

    // 4. Error handler (LAST!)
       app.use(errorHandler);

    */
const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})