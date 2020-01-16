import express from 'express';

const app = express()
const port = 3001

app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
})