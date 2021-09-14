const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]')
};

refs.controls.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== "A") {
    return    
  }
  const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');
  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');
  }
  const currentActivePainItem = refs.panes.querySelector('.pane--active');
  if (currentActivePainItem) {
    currentActivePainItem.classList.remove('pane--active');
  }
  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');
  const paneId = controlItem.getAttribute('href').slice(1);
  const pain = refs.panes.querySelector(`#${paneId}`)
  pain.classList.add('pane--active');
  
})