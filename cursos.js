// Select the div with class "leftColumn"
const leftColumn = document.querySelector('.leftColumn');

// Define the HTML block as a string
const htmlBlock = `<div class="headerVideo"><iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=aqz-KE-bpKQ&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe></div>`;

// Insert the HTML block as the first child of .leftColumn
leftColumn.insertAdjacentHTML('afterbegin', htmlBlock);