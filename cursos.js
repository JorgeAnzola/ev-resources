// Select the div with class "leftColumn"
const leftColumn = document.querySelector('.leftColumn');

// Define the HTML block as a string
const htmlBlock = `
<div class="block full_width_widget banner_widget">
  <div class="headingLinkWrap">
    <h2>Te damos la bienvenida</h2>
  </div>
  <div id="SlidingBanner58444" class="sliding_banner swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
    <div class="swiper-wrapper" style="width: 3228px; transition-duration: 0ms;" id="swiper-wrapper-4f8c42ffeaea1b82" aria-live="polite">
      <div class="swiper-slide sliding_banner_item swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 1076px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);" role="group" aria-label="1 / 1">
        <div class="headerVideo"><iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=aqz-KE-bpKQ&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe></div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
      <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>
    </div>
  </div>
</div>
`;

// Insert the HTML block as the first child of .leftColumn
leftColumn.insertAdjacentHTML('afterbegin', htmlBlock);