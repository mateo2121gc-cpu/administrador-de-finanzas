fetch('http://localhost:4000/api/categorias')
.then(repuesta => repuesta.json())
.then(datos =>{

    for(i=0; i< datos.data.length; i++){
        categorias.innerHTML += `<option>${datos[i].nombre}</option>`
    }
    })  


