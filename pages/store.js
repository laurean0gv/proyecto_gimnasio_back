const axios = require ("axios")

//ejecuto el llamado a la funcion con la carga de la web 
window.addEventListener("load",()=>{    
    let titulo = document.getElementById("titulo").textContent;
    console.log(titulo);
    if(titulo=="Store"){
        mostrarProductos();
    }
});




getNameAxios = async (idProducto) => {
    try {
        const resPost = await axios (`https://proyectogimnasioback-production.up.railway.app/store/`)
        const resUser = await axios(`https://proyectogimnasioback-production.up.railway.app/store/${idProducto.data.id}`)
        console.log(resUser.data.name);
        
    } catch (error) {
        console.log(error);
    }
}

getNameAxios(10);

