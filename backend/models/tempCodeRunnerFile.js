const database = require("../db/conexion_db")
console.log(database)




const obtenerDatos = async () => {
    const resultadoDatos = await database.query(" SELECT * FROM registros")
    console.log(resultadoDatos)
}

const obtenerCategorias = async() =>{
    const resultadoCategorias = await database.query("SELECT * FROM categorias")
    console.log(obtenerCategorias)
}
 
obtenerDatos()
obtenerCategorias()