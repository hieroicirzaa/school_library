const express = require(`express`)
const app = express()
app.use(express.json())

const adminController = require(`../controllers/admin.controller`)
app.get("/getAllAdmin", adminController.getAllAdmin)
app.post("/addAdmin", adminController.addAdmin)
app.post("/find", adminController.findAdmin)
app.put("/:id", adminController.updateAdmin)
app.delete("/:id", adminController.deleteAdmin)

module.exports = app
