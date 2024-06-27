/* const axios = require ("axios")*/

//ejecuto el llamado a la funcion con la carga de la web 
window.addEventListener("load", () => {
    let titulo = document.getElementById("titulo").textContent;
    console.log(titulo);
    if (titulo == "Store") {
        mostrarProductos();
    }
});


//funcion de carga y e impesion de productos
mostrarProductos = async () => {

    try {
        const resPost = await axios(`http://localhost:3000/store/`)
        /* const producto = await axios(`http://localhost:3000/store/${idProducto}`) */
        let productos="";
        resPost.data.forEach(agregaProducto)

        function agregaProducto (producto){
            productos+=`<article class="producto">
            <a href="${producto.foto}">
                <div class="cont-img"><img src="${producto.foto}" alt="${producto.titulo}"></div>
                <hr>
                    <h3>${producto.descripcion}</h3>
                    <p class="precio">$${producto.precio}</p>
            </a>
        </article>`
        }
        document.querySelector(".productos").innerHTML = productos


    } catch (error) {
        console.error(error);
    }
}



