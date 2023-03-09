let header = document.querySelector("header");
let formInicio = document.querySelector("#form-inicio");
let formClientes = document.querySelector("#form-clientes")
let formCelulares = document.querySelector("#form-celulares")
let formPortatiles = document.querySelector("#form-portatiles")
let cardCelulares = document.querySelector("#card-celulares")
let cardPortatiles = document.querySelector("#card-portatiles")
let cardClientes = document.querySelector("#card-clientes")


/* Funcionalidad para validar login con datos quemados, aparecer header y desaparecer login */

let btnIniciar = document.querySelector("#btn-iniciar");
btnIniciar.addEventListener("click", e => {
    e.preventDefault();

    let usuario = document.querySelector("#usuario");
    let contraseña = document.querySelector("#contraseña");

    if (usuario.value === "" || contraseña.value === "") {
        swal("¡Lo sentimos!", "No puede dejar espacios vacíos", "error");
        return
      
       
    }

    if (usuario.value === "1" && contraseña.value === "1") {
        header.classList.add("headerVisible")
        formInicio.classList.add("formInvisible");
    } else {
    
        swal("Error", "Nombre de usuario o contraseña incorrectos", "error");
    }

})

/* Funcionalidad para cerrar sesión quitando header y mostrando form de inicio */

let btnCerrar = document.querySelector("#btn-cerrar");

btnCerrar.addEventListener("click", () => {
    header.classList.remove("headerVisible")
    formInicio.classList.remove("formInvisible")
    formClientes.classList.add("cliente-invisible")
    formCelulares.classList.add("celular-invisible")
    formPortatiles.classList.add("portatil-invisible")
    cardCelulares.classList.add("recoleccion-invisible")
    cardPortatiles.classList.add("recoleccion-invisible")
    cardClientes.classList.add("recoleccion-invisible");

})


/* -----------------------------SECCIÓN FORM Y CARD PORTATILES */

/* Funcionalidad para agregar formulario de clientes */

let btnCliente = document.querySelector("#clientes")
btnCliente.addEventListener("click", () => {
    formClientes.classList.remove("cliente-invisible");
    formCelulares.classList.add("celular-invisible");
    formPortatiles.classList.add("portatil-invisible");
    cardCelulares.classList.add("recoleccion-invisible");
    cardPortatiles.classList.add("recoleccion-invisible")
    cardClientes.classList.add("recoleccion-invisible");

})

/* Funcionalidad para agregar card de clientes con la información correspondiente */

let btnGuardarCliente = document.querySelector("#btn-guardar-cliente");
btnGuardarCliente.addEventListener("click", () => {
    cardClientes.classList.remove("recoleccion-invisible");
    formClientes.classList.add("cliente-invisible");


    let nombreCliente = document.querySelector("#nombre-cliente");
    let documentoCliente = document.querySelector("#documento-cliente");
    let celularCliente = document.querySelector("#celular-cliente");
    let direccionCliente = document.querySelector("#direccion-cliente");
    let correoCliente = document.querySelector("#correo-cliente");

    let infoCardCliente = `<section class="container-contenido">
    <section class="card">
        <section class="card-imagen">
            <span class="cubrir"></span>
            <section class="imagen">
            <img src="https://raw.githubusercontent.com/lSaySayl/imagenesExternas/main/anonimo.png" alt="" class="card-img">
        </section>

        
        </section>
        

        <section class="card-contenido">
            <h2 class="nombre">${nombreCliente.value}</h2>

            <section class="informacion">

            <section>
                <h4>Documento</h4>
                    <p>${documentoCliente.value}</p>
            </section>
            <section>
                <h4>Celular</h4>
                    <p>${celularCliente.value}</p>
            </section>
            <section>
                <h4>Correo</h4>
                    <p>${direccionCliente.value}</p>
            </section>
            <section>
                <h4>Cantidad</h4>
                    <p>${correoCliente.value}</p>
            </section>

        </section>

        </section>
    </section>


</section>`

    cardClientes.innerHTML = infoCardCliente


})




/* -------------------------------------------------------------- SECCIÓN FORM Y CARD CELULARES -------------------------------------------------------------------- */

/* Funcionalidad para agregar formulario de celulares */

let btnCelular = document.querySelector("#celulares");
btnCelular.addEventListener("click", () => {
    formClientes.classList.add("cliente-invisible")
    formCelulares.classList.remove("celular-invisible")
    formPortatiles.classList.add("portatil-invisible")
    cardCelulares.classList.add("recoleccion-invisible")
    cardPortatiles.classList.add("recoleccion-invisible")
    cardClientes.classList.add("recoleccion-invisible");

})

/* Funcionalidad para agregar card de celulares con la información correspondiente */

let btnGuardarCelular = document.querySelector("#btn-guardar-celular");
btnGuardarCelular.addEventListener("click", () => {
    cardCelulares.classList.remove("recoleccion-invisible")
    formCelulares.classList.add("celular-invisible")

    let nombreCelular = document.querySelector("#nombre-celular");
    let referenciaCelular = document.querySelector("#referencia-celular");
    let codigoCelular = document.querySelector("#codigo-celular");
    let valorCelular = document.querySelector("#valor-celular");
    let cantidadCelular = document.querySelector("#cantidad-celular");
    let urlImagenCelular = document.querySelector("#imagen-celular");
    let infoCardCelular =
        `
    <section class="container-contenido">
                <section class="card">
                    <section class="card-imagen">
                        <span class="cubrir"></span>
    
                        <section class="imagen">
                            <img src="${urlImagenCelular.value}" alt="" class="card-img">
                        </section>
                    </section>
                    
    
                    <section class="card-contenido">
                        <h2 class="nombre">${nombreCelular.value}</h2>

                        <section class="informacion">

                        <section>
                            <h4>Referencia</h4>
                                <p>${referenciaCelular.value}</p>
                        </section>
                        <section>
                            <h4>Código</h4>
                                <p>${codigoCelular.value}</p>
                        </section>
                        <section>
                            <h4>Valor</h4>
                                <p>${valorCelular.value}</p>
                        </section>
                        <section>
                            <h4>Cantidad</h4>
                                <p>${cantidadCelular.value}</p>
                        </section>

                    </section>

                    </section>
                </section>
    

            </section>`

    cardCelulares.innerHTML = infoCardCelular;

})



/* -----------------------------SECCIÓN FORM Y CARD PORTATILES */

/* Funcionalidad para agregar formulario de portátiles */

let btnPortatil = document.querySelector("#portatiles")
btnPortatil.addEventListener("click", () => {
    formClientes.classList.add("cliente-invisible")
    formCelulares.classList.add("celular-invisible")
    formPortatiles.classList.remove("portatil-invisible")
    cardCelulares.classList.add("recoleccion-invisible")
    cardPortatiles.classList.add("recoleccion-invisible")
    cardClientes.classList.add("recoleccion-invisible");


})

/* Funcionalidad para agregar card de portatiles */

let btnGuardarPortatil = document.querySelector("#btn-guardar-portatil");
btnGuardarPortatil.addEventListener("click", () => {
    cardPortatiles.classList.remove("recoleccion-invisible")
    formPortatiles.classList.add("portatil-invisible")

    let nombrePortatil = document.querySelector("#nombre-portatil");
    let referenciaPortatil = document.querySelector("#referencia-portatil");
    let codigoPortatil = document.querySelector("#codigo-portatil");
    let valorPortatil = document.querySelector("#valor-portatil");
    let cantidadPortatil = document.querySelector("#cantidad-portatil");
    let urlImagenPortatil = document.querySelector("#imagen-portatil");

    let infoCardPortatil = `
    <section class="container-contenido">
                <section class="card">
                    <section class="card-imagen">
                        <span class="cubrir"></span>
    
                        <section class="imagen">
                            <img src="${urlImagenPortatil.value}" alt="" class="card-img">
                        </section>
                    </section>
                    
    
                    <section class="card-contenido">
                        <h2 class="nombre">${nombrePortatil.value}</h2>

                        <section class="informacion">

                        <section>
                            <h4>Referencia</h4>
                                <p>${referenciaPortatil.value}</p>
                        </section>
                        <section>
                            <h4>Código</h4>
                                <p>${codigoPortatil.value}</p>
                        </section>
                        <section>
                            <h4>Valor</h4>
                                <p>${valorPortatil.value}</p>
                        </section>
                        <section>
                            <h4>Cantidad</h4>
                                <p>${cantidadPortatil.value}</p>
                        </section>

                    </section>

                    </section>
                </section>
    
    
            </section>`


    cardPortatiles.innerHTML = infoCardPortatil





})
