const app = {
  init: function(formSelecter){
    document
    .querySelector(formSelecter)
    .addEventListener('submit',this.handleSubmit)
  },

  handleSubmit: function(ev){
    ev.preventDefault()
    const f=ev.target
    console.log(f.flickName.value)
  },
}



app.init('#flickForm')