var bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express')
var cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/api/recent', function(req, res) {
    res.set("Content-Type", "application/json");
    var recent = fs.readFileSync(__dirname+"/recent.json");
    res.send(recent);
})

app.get('/api/settings', function(req, res) {
    res.set("Content-Type", "application/json");
    var settings = fs.readFileSync(__dirname+"/settings.json");
    res.send(settings);
})

app.put('/api/recent', function(req, res) {
    var recent = fs.readFileSync(__dirname+"/recent.json", 'utf-8');
    recent = JSON.parse(recent);
    var userObj = req.body;

    recent = recent.map(function(obj) {
      if(obj.date == userObj.date) {
        return userObj;
      }

      return obj;
    })

    fs.writeFileSync(__dirname+"/recent.json", JSON.stringify(recent));
    res.send('{"status": "ok"}')
})

app.put('/api/settings', function(req, res) {
    var settings = fs.readFileSync(__dirname+"/settings.json", 'utf-8');
    settings = JSON.parse(settings);
    var userObj = req.body;

    settings = settings.map(function(obj) {
      console.log(obj);
      console.log(userObj);
      if(obj.name == userObj.name) {
        return userObj;
      }

      return obj;
    })

    fs.writeFileSync(__dirname+"/settings.json", JSON.stringify(settings));
    res.send('{"status": "ok"}')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
