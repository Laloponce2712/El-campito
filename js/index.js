// index.js

// Array de productos
const productos = [
    { nombre: "Dormitorio 1", precio: "$200.000", img: "img/dormitorio1.png" },
    { nombre: "Dormitorio 2", precio: "$200.000", img: "img/dormitorio2.png" },
    { nombre: "Dormitorio 3", precio: "$200.000", img: "img/dormitorio3.png" },
    { nombre: "Dormitorio 1", precio: "$200.000", img: "img/dormitorio1.png" }
];

// Función para crear una tarjeta de producto
function crearProductoCard(producto) {
    return `
        <div class="col-md-4">
            <div class="producto-card">
                <img src="${producto.img}" alt="${producto.nombre}" class="producto-img">
                <h3 class="producto-title">${producto.nombre}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="btn btn-primary">Ver más</button>
            </div>
        </div>
    `;
}

// Función para crear la sección de productos
function crearSeccionProductos() {
    let cards = '';
    productos.forEach(producto => {
        cards += crearProductoCard(producto);
    });

    return `
        <section id="productos">
            <div class="container">
                <h2 class="section-title">Nuestros Productos</h2>
                <p class="section-description">Descubrí los productos más elegidos por nuestros clientes.</p>
                <div class="row productos-row">
                    ${cards}
                </div>
            </div>
        </section>
    `;
}

// Función para crear el header
function crearHeader() {
    return `
    <header id="header">
        <div class="container header-content">
            <h1 class="logo">El Campito</h1>
            <nav class="main-nav">
                <a href="#header">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </div>
    </header>
    `;
}

// Función para crear el footer
function crearFooter() {
    return `
    <footer id="contacto" class="main-footer">
        <div class="container footer-content">
            <div class="footer-brand">
                <h2>El Campito</h2>
            </div>
            <div class="footer-links">
                <h3>Enlaces</h3>
                <ul>
                    <li><a href="#header">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Registrate</a></li>
                    <li><a href="#">+Info</a></li>
                </ul>
            </div>
            <div class="main-footer">
                &copy; 2025 El Campito. Todos los derechos reservados.
            </div>
        </div>
    </footer>
    `;
}

// Función para crear la sección hero (carousel)
function crearHero() {
    return `
    <section class="hero">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>
            <section id="fondo"></section>
        </div>
    </section>
    `;
}

// Función principal para generar todo el HTML
function renderApp() {
    const app = document.getElementById("app");
    app.innerHTML = `
        ${crearHeader()}
        <main>
            ${crearHero()}
            ${crearSeccionProductos()}
        </main>
        ${crearFooter()}
    `;
}

// Ejecutamos la función
renderApp();

const ver = document.getElementById("verpassword")
ver.addEventListener("change", vercontrasena )

function vercontrasena() {
    if (ver.checked === true) {
        document.getElementById("inppassword").type= "text"
        document.getElementById("inpconfirmar").type= "text"
    }else{
        document.getElementById("inppassword").type= "password"
        document.getElementById("inpconfirmar").type= "password"
    }
}
const botoningresar = document.getElementById("btniniciar")
botoningresar.addEventListener("click", ingresar )
function ingresar() {
    alert("Está por ingresar")
}
const botonregistrar = document.getElementById("btnregistrarse")
botonregistrar.addEventListener("click", verregistrar )
function verregistrar() {
    document.getElementById("confirmar").style.display = "block"
    document.getElementById("inpconfirmar").style.display = "block"
}
