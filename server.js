import express from 'express'


const app = express()
app.get('/', (req, res) => {
    res.send('Hello World, this is the new version!')
})
app.listen(3000, console.log(`Listening on port: 3000`))