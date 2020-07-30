const express = require('express')
const fs = require('graceful-fs')
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
    log_path = path.join(process.cwd(), "tmp", req.body.fileName);
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

let e2e_log_path;

/**
 * req.body:
 *  @param start {boolean}: the end-to-end log recording started, set to false when record ends
 *  @param name {String}: the name of current running test suite
 */
app.post('/set-e2e-name', (req, res) => {
  console.log('get post set e2e name')
  if(req.body.start) {
    e2e_log_path = path.join(process.cwd(), 'tmp', 'e2e', req.body.name+'.json')
    console.log(req.body.name)
    console.log(e2e_log_path)
    if(!fs.existsSync(e2e_log_path)) {
      fs.openSync(e2e_log_path, 'w')
    }
  } else {
    e2e_log_path = undefined;
  }
  res.send({logPath: e2e_log_path});
})

app.post('/e2e-message', (req, res) => {
  if(e2e_log_path) {
    try {
      if(req.body.msg) 
        fs.appendFileSync(e2e_log_path, req.body.msg)
      res.send('ok');
    } catch (err) {
      console.log('err', err)
      res.status(500).send({ error: err })
    } 
  } else {
    res.send('ok');
  }
})

app.post('/e2e-process-result', (req, res) => {
  let dir = path.join(process.cwd(), 'tmp', 'e2e');
  // let dir = path.join(process.cwd(), 'tmp');
  fs.readdirSync(dir).forEach(file => {
    if(path.extname(file) === '.json') {
      let content = fs.readFileSync(path.join(dir, file), 'utf-8');
      fs.writeFileSync(path.join(dir, file), '[' +content.substr(0, content.length - 1) + ']')
    }
  })

  res.json({dir: dir});
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))