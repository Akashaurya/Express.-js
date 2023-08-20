const express = require('express')
const app = express()
const port = 4000
const path = require('path');


app.get('/', (req, res) =>{
    res.send('hello world')
})
app.get('/about', (req, res) =>{
    //res.send('about')
res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
  
})



//server.listen(port, hostname, () => {

//})