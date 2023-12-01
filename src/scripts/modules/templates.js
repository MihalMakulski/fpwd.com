import config from '../config';

export function sizeSelectorInDrawer(currentSize = config.sizes.initial) {
  return `
    <div class="drawer-header">Choose size</div>
    <div>Sizes:</div>
    <div class="drawer-available-sizes">
      ${sizeSwatches(currentSize)}
    </div>
    <button class="btn-primary drawer-size-select">Done</button>
  `;
}

export function sizeSwatches(currentSize = config.sizes.initial) {
  const { sizes } = config;
  const avaliableSizes = sizes.avaliable;

  return avaliableSizes.map(
    (size) => `<div data-size="${size}" class="size-item ${size === currentSize ? 'size-item--active' : ''}">${size}</div>`
  ).join('');
};

export function sizeSelected(size = config.sizes.initial) {
  return `Selected size: <span class="current-size-code">${size}</span>`;
};

export function swiperSlides(images) {
  return images.map((img) => `
    <div class="swiper-slide">
      <img src="${img}" />
    </div>
  `).join('');
}

export function genericError(message) {
  return `<div class="error-message">${message}</div>`;
}

export function runTemplate(html, parentSelector) {
  const parent = document.querySelector(parentSelector);

  if (parent) {
    parent.innerHTML = html;
  }
}


