const express = require(`express`)
const app = express()
app.use(express.json())

const bookController = require(`../controllers/book.controller`)
app.get("/getAllBook", bookController.getAllBook)
app.post("/addBook", bookController.addBook)
app.post("/find", bookController.findBook)
app.put("/:id", bookController.updateBook)
app.delete("/:id", bookController.deleteBook)

module.exports = app
