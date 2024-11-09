function ja1InitializeMenu() {
    console.log('ja1: external js loaded');

    function ja1ToggleMenu() {
        const menuItems = document.getElementById("ja1-menu-items");
        menuItems.style.display = menuItems.style.display === "block" ? "none" : "block";
    }

    const contentWrap = document.getElementById("contentWrap");
    if (contentWrap && contentWrap.classList.contains("hasRightColumn")) {
        contentWrap.classList.remove("hasRightColumn");
    }

    const sectionTitle = document.querySelector(".sectionTitle");
    if (sectionTitle) {
        sectionTitle.innerHTML = "";

        sectionTitle.innerHTML = `
            <div class="ja1-header">
                <a href="/" class="ja1-logo">
                    <img src="https://cdn.jsdelivr.net/gh/jorgeanzola/ev-resources@latest/assets/EV_Logo_RGB.png" alt="Logo" />
                </a>
                <nav class="ja1-navbar">
                    <div class="ja1-menu-toggle" onclick="ja1ToggleMenu()">☰</div>
                    <ul id="ja1-menu-items" class="ja1-menu-items">
                        <li><a href="/class_catalog">Cursos</a></li>
                        <li><a href="/main_catalog">Cat\u00E1logo</a></li>
                        <li class="ja1-has-dropdown">
                            <a href="#">Usuarios</a>
                            <ul class="ja1-dropdown">
                                <li><a href="/friends">Amigos</a></li>
                                <li><a href="/my_instructors/index">Mis instructores</a></li>
                                <li><a href="/my_circle">Mi c\u00EDrculo</a></li>
                            </ul>
                        </li>
                        <li><a href="/locker/list">Recursos</a></li>
                        <li><a href="https://leadhub.engelvoelkers.com/es/935bd72f-ff9b-46cc-b0c9-6c6cbde8309d/dashboard" target="_blank">E&V Advanced</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}
if (window.innerWidth >= 768) {
    ja1InitializeMenu();
}
if (window.innerWidth >= 768 && window.excaliburRouter) {
    window.excaliburRouter.onRouteChange(() => {
        ja1InitializeMenu();
    });
}