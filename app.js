const express = require('express')
const app = express()


app.get('/', (req,res) => {
    res.send("Welcome to the hhome page")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("wazauppp")
})