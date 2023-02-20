const express = require(`express`)
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
const cors = require(`cors`)
const auth = require(`./routes/auth.routes`)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//app.use(express.static(__dirname))
app.use(`/auth`, auth)


const memberRoute = require(`./routes/member.routes`)
app.use(`/member`, memberRoute)

const adminRoute = require(`./routes/admin.routes`)
app.use(`/admin`, adminRoute)

const bookRoute = require(`./routes/book.routes`)
app.use(`/book`, bookRoute)

const borrowRoute = require(`./routes/borrow.routes`)
app.use(`/borrow`, borrowRoute)


app.listen(PORT, () => {
  console.log(`Server of School's Library runs on port
  ${PORT}`)
})