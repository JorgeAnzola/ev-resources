// Select the div with class "leftColumn"
const leftColumn = document.querySelector('.leftColumn');

// Define the HTML block as a string
const htmlBlock = `
<div class="block full_width_widget banner_widget">
  <div class="headingLinkWrap">
    <h2>Te damos la bienvenida</h2>
    <a aria-controls="quick_edit_box_58444" excalibur-click="Functions.Helpers.quick_edit_visibility" class="quick_edit_icon widget_option_icon" aria-expanded="false" title="Acciones">
      <i class="ellipsis_vertical"></i>
      <span class="textOffScreen">Acciones</span>
    </a>
    <div id="quick_edit_box_58444" class="quick_edit_box quick_edit_list" style="display: none">
      <div class="arrow"></div>
      <a href="javascript:void(0)" excalibur-click="hide_widget" data-cell_id="58444" data-title="Te damos la bienvenida">Ocultar</a>
    </div>
  </div>
  <div id="SlidingBanner58444" class="sliding_banner swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
    <div class="swiper-wrapper" style="width: 3228px; transition-duration: 0ms;" id="swiper-wrapper-4f8c42ffeaea1b82" aria-live="polite">
      <div class="swiper-slide sliding_banner_item swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 1076px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);" role="group" aria-label="1 / 1">
        <div class="headerVideo"><iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=aqz-KE-bpKQ&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe></div>
      </div>
      <div class="swiper-slide sliding_banner_item swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 1076px; transition-duration: 0ms; opacity: 1; transform: translate3d(-1076px, 0px, 0px);" role="group" aria-label="1 / 1">
        <div class="headerVideo"><iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=aqz-KE-bpKQ&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe></div>
      </div>
      <div class="swiper-slide sliding_banner_item swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 1076px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2152px, 0px, 0px);" role="group" aria-label="1 / 1">
        <div class="headerVideo"><iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=aqz-KE-bpKQ&amp;controls=0&amp;showinfo=0&amp;modestbranding=1" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe></div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
      <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>
    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
  </div>
  <script>
    on_ready(function() {
      Excalibur.ie_support('/javascripts/plugins/swiper-bundle.min.js', '/javascripts/plugins/swiper.jquery.min.js', function() {
        create_sliding_banner_carousel("SlidingBanner58444", 0);
      });
    });
  </script>
</div>
`;

// Insert the HTML block as the first child of .leftColumn
leftColumn.insertAdjacentHTML('afterbegin', htmlBlock);