import express from 'express'


const app = express()
app.get('/', (req, res) => {
    res.send('Hello World, this is the new version!')
})
app.listen(80)
console.log(`Listening on port: 80`)