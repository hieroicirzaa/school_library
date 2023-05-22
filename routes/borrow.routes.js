const express = require(`express`)
const app = express()
app.use(express.json())
const { authorize } = require(`../controllers/auth.controller`)
let validationBorrow = require(`../middlewares/borrow-validation`)

const borrowController = require(`../controllers/borrow.controller`)

// app.get("/getBorrow",[authorize], borrowController.getBorrow) // wes
// app.post("/addBorrow",validationBorrow,[authorize], borrowController.addBorrowing) // wes
// app.put("/:id",validationBorrow,[authorize], borrowController.updateBorrowing) // wes
// app.delete("/:id",[authorize], borrowController.deleteBorrowing) // wes
// app.get("/return/:id",[authorize], borrowController.returnBook) // wes
// app.post("/filterBorrow",[authorize], borrowController.filterBorrow) // wes

app.get("/getBorrow", borrowController.getBorrow) // wes
app.post("/addBorrow", validationBorrow, borrowController.addBorrowing) // wes
app.put("/:id", validationBorrow, borrowController.updateBorrowing) // wes
app.delete("/:id", borrowController.deleteBorrowing) // wes
app.get("/return/:id", borrowController.returnBook) // wes
app.post("/filterBorrow", borrowController.filterBorrow) // wes

module.exports = app
