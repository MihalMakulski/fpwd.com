import { runTemplate, sizeSwatches, sizeSelected, sizeSelectorInDrawer, genericError } from './templates.js';
import { evtHub } from './eventHub.js';

import config from '../config.js';

export default {
  'drawer:open': (content) => {
    if (content === 'size-selector') {
      runTemplate(sizeSelectorInDrawer(config.sizes.current), '.drawer-content');
      config.sizes.clicked = null;
    } else {
      runTemplate(genericError('Oops... Something was supposed to be here.'), '.drawer-content');
    }

    document.body.classList.add('drawer-open');
  },
  'drawer:close': () => document.body.classList.remove('drawer-open'),
  'size:clicked': (size) => {
    runTemplate(sizeSwatches(size), '.drawer-available-sizes');
    config.sizes.clicked = size;
  },
  'size:selected': () => {
    config.sizes.current = config.sizes.clicked || config.sizes.current;
  
    if (config.sizes.current) {
      runTemplate(sizeSelected(config.sizes.current), '.current-size');
    }
    
    evtHub.trigger('drawer:close');
  }
}