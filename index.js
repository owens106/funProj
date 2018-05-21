class App {
  constructor(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', ev => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
  }

  removeFlick(item, flick, _ev) {
    // remove from the DOM
    item.remove()

    //remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  }

  favFlick(item, flick, _ev) {
    flick.fav = item.classList.toggle('fav')
  }

  toggleEditable(item,flick,_ev){
    const nameField = item.querySelector('.flickName')
    const button = item.querySelector('.edit.button')
    if(nameField.isContentEditable){
      //make it no longer editable
      nameField.contentEditable=false
      button.textContent='edit'
      button.classList.remove('success')
      
    }
    else{
      //make editable
      nameField.contentEditable=true
      button.textContent='save'
      button.classList.add('success')
      nameField.focus()
    }
  }

  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
      .querySelector('.flickName')
      .textContent = flick.name

    item
      .querySelector('.remove.button')
      .addEventListener(
        'click',
        this.removeFlick.bind(this, item, flick)
      )

    item
      .querySelector('.fav.button')
      .addEventListener(
        'click',
        this.favFlick.bind(this, item, flick)
      )
      item
      .querySelector('.edit.button')
      .addEventListener(
        'click',
        this.toggleEditable.bind(this, item, flick)
      )

    return item
  }

  handleSubmit(ev) {
    const f = ev.target
    const flick = {
      id: ++this.max,
      name: f.flickName.value,
      fav: false,
    }

    this.flicks.unshift(flick)

    const item = this.renderListItem(flick)
    this.list.insertBefore(item, this.list.firstChild)

    f.reset()
  }
}

const app = new App({
  formSelector: '#flickForm',
  listSelector: '#flickList',
  templateSelector: '.flick.template',
})