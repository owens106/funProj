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

    item.querySelector('.button.alert')
      .addEventListener('click', ev =>{
        var a=ev.target.parentElement.parentElement
        a.parentElement.removeChild(a)
        for(var i=0;i<app.flicks.length;i++){
          if(app.flicks[i].id==a.dataset.id){
            app.flicks.splice(i,1)
          }
        }
        
        
      })
      item.querySelector('.button.warning')
        .addEventListener('click', ev =>{
          var a=ev.target.parentElement.parentElement
          
          for(var i=0;i<app.flicks.length;i++){
            if(app.flicks[i].id==a.dataset.id){
              console.log(app.flicks[i].fav)
              app.flicks[i].fav=!(app.flicks[i].fav)
              if(app.flicks[i].fav==true){
                (a.querySelector('.flickName').style.backgroundColor='yellow')
              }
              else{
                a.querySelector('.flickName').style.backgroundColor='white'

              }
              console.log(app.flicks[i].fav)

            }
          }
          //debugger
        })

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
      fav: false,
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