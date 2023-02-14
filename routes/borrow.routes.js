const express = require(`express`)
const app = express()
app.use(express.json())

const borrowController = require(`../controllers/borrow.controller`)

app.get("/getBorrow", borrowController.getBorrow) // wes
app.post("/addBorrow", borrowController.addBorrowing) // wes
app.put("/:id", borrowController.updateBorrowing) // wes
app.delete("/:id", borrowController.deleteBorrowing) // wes
app.get("/return/:id", borrowController.returnBook) // wes
app.post("/filterBorrow", borrowController.filterBorrow) // wes

module.exports = app
