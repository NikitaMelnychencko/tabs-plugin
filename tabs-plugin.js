class Tabs{
  constructor({ rootSelector, activeControlsClass ='active',activePanesClass }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlsClass;
    this._activePanesClass = activePanesClass;

    this._bindEvents();
  }
  _getRefs(root) {
    const refs = {
      controls: document.querySelector(`${root} [data-controls]`),
      panes: document.querySelector(`${root} [data-panes]`),
    };
    return refs;
  }
  _bindEvents() {
    this._refs.controls.addEventListener('click', this._onControlClick.bind(this));
  }
  _onControlClick (event){
    
    event.preventDefault();
    if (event.target.nodeName !== "A") {
      return    
    }
    const currentActiveControlItem = this._refs.controls.querySelector(`.${this._activeControlClass}`);
    console.log(this._activeControlClass);
    if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove(`${this._activeControlClass}`);
    }
    const currentActivePainItem = this._refs.panes.querySelector(`.${this._activePanesClass}`);
    if (currentActivePainItem) {
      currentActivePainItem.classList.remove(`${this._activePanesClass}`);
    }
    const controlItem = event.target;
    controlItem.classList.add(`${this._activeControlClass}`);
    const paneId = controlItem.getAttribute('href').slice(1);
    const pain = this._refs.panes.querySelector(`#${paneId}`)
    pain.classList.add(`${this._activePanesClass}`);
    }
}


const tabs1 = new Tabs({
  rootSelector: '#tabs-1',
  activeControlsClass: 'controls__item--active',
  activePanesClass: 'pane--active'

})
console.log(tabs1);





  
  
  
// })

