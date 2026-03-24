const { Router } = require("express")

const newMessageRouter = Router()

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

newMessageRouter.post("/", (req, res) => {
    const { text, user } = req.body

    if (!text || !user) {
        res.status(400).json({ error: "Text and user are required" })
    }

    const newMessage = {
        text,
        user,
        added: new Date()
    }

    messages.push(newMessage)
    res.status(201).json(newMessage)
})


module.exports = newMessageRouter