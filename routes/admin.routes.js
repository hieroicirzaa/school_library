const express = require(`express`)
const app = express()
const { authorize } = require(`../controllers/auth.controller`)
app.use(express.json())

const adminController = require(`../controllers/admin.controller`)
app.get("/getAllAdmin", [authorize], adminController.getAllAdmin)
app.post("/addAdmin", [authorize], adminController.addAdmin)
app.post("/find", [authorize], adminController.findAdmin)
app.put("/:id", [authorize], adminController.updateAdmin)
app.delete("/:id", [authorize], adminController.deleteAdmin)

module.exports = app
