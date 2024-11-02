// Select the div with class "leftColumn"
// const leftColumn = document.querySelector('.leftColumn');

// Define the HTML block as a string
// const htmlBlock = `<div class="headerVideo"><iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=aqz-KE-bpKQ&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe></div>`;

// Insert the HTML block as the first child of .leftColumn
// leftColumn.insertAdjacentHTML('afterbegin', htmlBlock);

console.log('External JS loaded');
// Selecciona el iframe de YouTube dentro del contenedor especificado
const videoContainer = document.querySelector('.block.full_width_widget.banner_widget .resource-youtube iframe');

if (videoContainer) {
    // Extrae la URL actual del src del iframe
    const videoSrc = videoContainer.src;

    // Usa una expresión regular para obtener el ID del video de YouTube
    const videoIdMatch = videoSrc.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
        const videoId = videoIdMatch[1];

        // Construye el nuevo iframe con los parámetros deseados
        const newIframe = `<div class="headerVideo">
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1" 
            allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe>
        </div>`;

        // Reemplaza el contenido HTML del contenedor actual con el nuevo iframe
        document.querySelector('.block.full_width_widget.banner_widget').innerHTML = newIframe;
    }
}
