const express = require('express')
const fs = require('fs')
const bodyParser = require("body-parser");
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
const app = express()
const cors = require('cors')
const port = 8888
let log_path;

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(cors())

/*
  * instrument server side logger
  * params: req.body.
  *     fileName: fileName in ../tmp/ folder, create new file if doesn't exist
  *     msg: message to add to file
  * 
  * remember to use --header 'Content-Type: application/x-www-form-urlencoded'
*/
app.post('/instrument-message', (req, res) => {
  // console.log("POST", req.body)
  let logStream;
  try {
    log_path = path.join(process.env.SRT_PATH, "tmp", req.body.fileName);
    logStream = fs.createWriteStream(log_path, { flags: "a" });
    logStream.write(req.body.msg);
    logStream.end();
  } catch (err) {
    res.status(500).send({ error: err });
  }
  res.send('ok')

})

app.get('/log-path', (req, res) => {
  res.json({
    path: log_path
  })
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))