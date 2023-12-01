import { evtHub } from './eventHub.js';

export function setGlobalClickListener() {
  document.addEventListener('click', ({target}) => {
    const isSizeSelectorClicked = target.classList.contains('size-selector');
    const isDrawerCloseClicked = target.closest('.drawer-close');
    const isOutsideDrawerClicked = !target.closest('.drawer') && document.body.classList.contains('drawer-open');
    const isSizeItemClicked = target.classList.contains('size-item');
    const isSizeSelectClick = target.classList.contains('drawer-size-select');

    if (isSizeSelectorClicked) {
      evtHub.trigger('drawer:open', target.dataset.drawerContent);
    }

    if (isDrawerCloseClicked || isOutsideDrawerClicked) {
      evtHub.trigger('drawer:close');
    }

    if (isSizeItemClicked) {
      evtHub.trigger('size:clicked', target.dataset.size);
    }

    if (isSizeSelectClick) {
      evtHub.trigger('size:selected');
    }
  });
}