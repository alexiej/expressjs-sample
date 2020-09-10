const express = require('express')
const app = express()


app.get('/', (req,res) => {
    res.send("Welcome to the hhome page")
})

app.listen(80, () => {
    console.log("wazauppp")
})