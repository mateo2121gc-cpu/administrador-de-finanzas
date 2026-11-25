    const categoria = document.getElementById('categorias')
    fetch('http://localhost:4000/api/categorias')
    .then(repuesta => repuesta.json())
    .then(datos =>{

        for(i=0; i< datos.length; i++){
            categorias.innerHTML += `<option>${datos[i].nombre}</option>`
        }
        })  


const gastos = document.getElementById('registros')
fetch('http://localhost:4000/api/gastos')
.then(repuesta => repuesta.json())
.then(datos =>{

    for(i=0; i< datos.length; i++){
        gastos.innerHTML += ` <div class="hijo">

            <div id="registro">

                <span>${datos[i].monto}</span>
                <span>${datos[i].fecha}</span>
                <span>${datos[i].tipo}</span>
                
                <div>
                    <button>ELIMINAR</button>
                    <button>EDITAR</button>

                </div>
            </div>
        </div>`
    }
    })  


