const express = require(`express`)
const app = express()
app.use(express.json())
//let { validateMember } = require(`../middlewares/member-Validation`)
const { authorize } = require(`../controllers/auth.controller`)
let validationMember = require(`../middlewares/member-validation`)


const memberController = require(`../controllers/member.controller`)
// app.get("/getAllMember", memberController.getAllMember)
// app.post("/addMember", [validateMember], memberController.addMember)
// app.post("/find", memberController.findMember)
// app.put("/:id", [validateMember], memberController.updateMember)
// app.delete("/:id", memberController.deleteMember)

// app.get("/getAllMember", [authorize], memberController.getAllMember)
// app.post("/addMember", [authorize], memberController.addMember)
// app.post("/find", [authorize], memberController.findMember)
// app.put("/:id", [authorize], memberController.updateMember)
// app.delete("/:id", [authorize], memberController.deleteMember)

// app.get("/getAllMember", [authorize], memberController.getAllMember);
// app.post("/addMember", validationMember, [authorize], memberController.addMember);
// app.post("/find", [authorize], memberController.findMember);
// app.put("/:id", validationMember,[authorize], memberController.updateMember);
// app.delete("/:id", [authorize], memberController.deleteMember);

app.get("/getAllMember", memberController.getAllMember);
app.post("/addMember",  memberController.addMember);
app.post("/find", memberController.findMember);
app.put("/:id",  memberController.updateMember);
app.delete("/:id", memberController.deleteMember);

module.exports = app
