const database = require("../db/conexion_db")
console.log(database)




const obtenerDatos = async () => {
    const resultadoDatos = await database.query(" SELECT * FROM categorias")
    console.log(resultadoDatos)
}

obtenerDatos()