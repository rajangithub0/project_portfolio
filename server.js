const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

//dotenv
dotenv.config();

//rest object
const app = express()

//middleware

app.use(cors())
app.use(express.json())

//static files access
app.use(express.static(path.join(__dirname, './Client/build')))
//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './Client/build/index.html'))
})
// app.get("/", (req, res) => {
//     res.send('<h1>welcome to node server</h1>')
// })

//port
const PORT = process.env.PORT || 8080


//listen

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})