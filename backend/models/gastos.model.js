const database = require("../db/conexion_db")

class GastosModel{

    static async obtenerGastos(){

        const [resultadoDatos] = await database.query(" SELECT * FROM registros")
       console.log(resultadoDatos)
       return resultadoDatos
    }



}

module.exports = GastosModel
