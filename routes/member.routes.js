const express = require(`express`)
let { validateMember } = require(`../middlewares/member-validation`)
const app = express()
app.use(express.json())

const memberController = require(`../controllers/member.controller`)
app.get("/getAllMember", memberController.getAllMember)
app.post("/addMember", [validateMember], memberController.addMember)
app.post("/find", memberController.findMember)
app.put("/:id", [validateMember], memberController.updateMember)
app.delete("/:id", memberController.deleteMember)

module.exports = app
