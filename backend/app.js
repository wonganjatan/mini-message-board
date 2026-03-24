const express = require('express')
const app = express()
const cors = require("cors")
const newMessageRouter = require("../backend/newMessageRouter")

app.use(cors())
app.use(express.json())

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get("/", (req, res) => {
    res.send("Hellow from express")
})

app.get("/messages", (req, res) => {
    res.json(messages)
})

app.use("/messages/new", newMessageRouter)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})