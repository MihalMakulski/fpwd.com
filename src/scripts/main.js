import { evtHub } from './modules/eventHub.js';
import events from './modules/appEvents.js';
import { setGlobalClickListener } from './modules/globalClickEvents.js';
import { runTemplate, sizeSwatches, sizeSelected, swiperSlides} from './modules/templates.js';

import config from './config';

import '../styles.css'

init();

function init() {
  runInitalRender();
  wireEvents();
  initSwiper();
}

function runInitalRender() {
  runTemplate(swiperSlides(config.images.thumbnails), '.swiper-thumbnails .swiper-wrapper');
  runTemplate(swiperSlides(config.images.main), '.swiper-main .swiper-wrapper');
  runTemplate(sizeSwatches(), '.drawer-available-sizes');
  runTemplate(sizeSelected(), '.current-size');
}

function wireEvents() {
  setGlobalClickListener();
  Object.keys(events).forEach((evt) => evtHub.on(evt, events[evt]));
}

function initSwiper() {
  const thumbnailsSwiper = new Swiper('.swiper-thumbnails', {
    direction: 'vertical',
    slidesPerView: 5,
    spaceBetween: 30,
  });
  
  new Swiper('.swiper-main', {
    thumbs: {
      swiper: thumbnailsSwiper
    },
    navigation: {
      nextEl: '.swiper-main .swiper-button-next',
      prevEl: '.swiper-main .swiper-button-prev',
    },
  });
}
