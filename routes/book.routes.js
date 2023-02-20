const express = require(`express`)
/** load function from simple-middleware */
const { midOne } = require(`../middlewares/simple-middleware.js`)
const app = express()
app.use(express.json())

const bookController = require(`../controllers/book.controller`)
//app.get("/getAllBook", bookController.getAllBook)
app.post("/addBook", bookController.addBook)
app.post("/find", bookController.findBook)
app.put("/:id", bookController.updateBook)
app.delete("/:id", bookController.deleteBook)

/** create route to get data with method "GET" */
app.get("/getAllBook",[midOne], bookController.getAllBook)


module.exports = app
