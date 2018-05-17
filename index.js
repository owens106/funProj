const app = {
  init: function(selectors) {
    this.max = 0
    this.list=document.querySelector(selectors.listSelector)
    this.flicks=[]
    this.template=document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', ev => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
  },

  renderListItem: function(flick){
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    
    item.querySelector('.flickName')
    .textContent=flick.name
    item.dataset.id=flick.id
    return item
  },

  handleSubmit: function(ev) {
    const f = ev.target
    const flick = {
      id: ++this.max,
      name: f.flickName.value,
    }
    this.flicks.unshift(flick)
    const item = this.renderListItem(flick)
    this.list.insertBefore(item, this.list.firstChild)

    console.log(flick)
    f.reset()
  },

  
}

app.init({
  formSelector: '#flickForm',
  listSelector: '#flickList',
  templateSelector: '.flick.template'
})