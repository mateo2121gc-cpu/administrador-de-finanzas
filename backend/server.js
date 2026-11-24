const express = require("express")
const cors = require("cors")
const router = require("./routes/router")
const app = express()
let port = 4000|
app.use(express.json())
app.use("/api",router)
app.use(cors())
app.listen(port, ()=>{
    console.log(`corriendo en el ${port}`)
})