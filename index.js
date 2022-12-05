const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.use(express.static(path.join(__dirname, '/public')))
// all refs

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/index.html"))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/about.html"))
  })

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/blog.html"))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects.html"))
})

app.get('project/ip-info-grabber', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects/ip-info-grabber.html"))
})

app.get('project/lawyer-simulator', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects/lawyer-simulator.html"))
})

app.get('project/cloud-weather', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects/cloud-weather.html"))
})

app.get('project/project-mario', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects/project-mario.html"))
})

app.get('project/old-personal-site', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects/old-personal-site.html"))
})

app.get('project/tyler-tv', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/projects/tyler-tv.html"))
})

app.get('project/project-lizard', (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/project/project-lizard.html"))
})

//start listening upon port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})