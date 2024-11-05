// Función para alternar la visibilidad del menú
function ja1ToggleMenu() {
    const menuItems = document.getElementById("ja1-menu-items");
    menuItems.style.display = menuItems.style.display === "block" ? "none" : "block";
}

const contentWrap = document.getElementById("contentWrap");
if (contentWrap && contentWrap.classList.contains("hasRightColumn")) {
    contentWrap.classList.remove("hasRightColumn");
}

// Buscar el div con clase "sectionTitle"
const sectionTitle = document.querySelector(".sectionTitle");

if (sectionTitle) {
    // Eliminar el contenido existente
    sectionTitle.innerHTML = "";

    // Agregar el nuevo contenido HTML
    sectionTitle.innerHTML = `
        <div class="ja1-header">
            <nav class="ja1-navbar">
                <ul class="ja1-menu">
                    <li><a href="#">Inicio</a></li>
                </ul>
                <div class="ja1-menu-toggle" onclick="ja1ToggleMenu()">☰</div>
                <ul id="ja1-menu-items" class="ja1-menu-items">
                    <li class="ja1-has-dropdown">
                        <a href="#">Servicios</a>
                        <ul class="ja1-dropdown">
                            <li><a href="#">Diseño Gráfico</a></li>
                            <li><a href="#">Desarrollo Web</a></li>
                            <li><a href="#">Marketing</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    `;
}