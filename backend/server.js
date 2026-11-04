const express = require("express")
const app = express()
let puerto = 3000


app.get('/',(request,response)=>{
  response.send("hola clase de programacion 2 - soy el servidor")

})





app.listen(puerto,()=>{
    console.log("este es mi puerto numero   "  +  puerto)
})
