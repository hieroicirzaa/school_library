const express = require(`express`)
const app = express()
app.use(express.json())

const memberController = require(`../controllers/member.controller`)
app.get("/getAllMember", memberController.getAllMember)
app.post("/addMember", memberController.addMember)
app.post("/find", memberController.findMember)
app.put("/:id", memberController.updateMember)
app.delete("/:id", memberController.deleteMember)

module.exports = app
