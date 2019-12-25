import { getHeight } from '/assets/js/getElementSize.js';

(function() {
  document.documentElement.style.setProperty(
    '--header-height',
    getHeight(document.querySelector('header')) + 'px'
  );
}());
