const dotenv = require("dotenv/config")
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4006

app.get("/" , (req , res) => {
    res.json({
        message : "how are you sweetheart"
    })
})

app.listen(PORT , () => {
    console.log(`server run at port no ${PORT}`)
})