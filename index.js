const app = {
  init: function(selectors) {
    this.max = 0
    this.list=document.querySelector(selectors.listSelector)
    this.flicks=[]

    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', ev => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
  },

  renderListItem: function(flick){
    const item = document.createElement('li')
    item.textContent=flick.name
    item.dataset.id=flick.id
    return item
  },

  handleSubmit: function(ev) {
    const f = ev.target
    const flick = {
      id: ++this.max,
      name: f.flickName.value,
    }
    this.flicks.push(flick)
    const item = this.renderListItem(flick)
    this.list.appendChild(item)

    console.log(flick)
    f.reset()
  },

  
}

app.init({
  formSelector: '#flickForm',
  listSelector: '#flickList',
})