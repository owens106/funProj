const form = document.querySelector('#userForm')
let master=[]
let counter=0


const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const entry = {
    input: f.input.value,
    
  }
  
  master.push(entry)
  counter++
  const users = document.querySelector('#list')
  users.appendChild(renderList(entry))

  f.reset()
  f.input.focus()
}
function renderList(data) {
    
    const list = document.createElement('dl')
    const labels = Object.keys(data)
    labels.forEach(label => {
      const item = renderListItem(label, data[label])
      list.appendChild(item)
    })
    return list
  }



  function renderListItem(label, value) {
    const item = document.createElement('li')
    const term = document.createElement('dt')
    const deleteButton = document.createElement('button')
    deleteButton.style.height='50px'
    deleteButton.style.width='75px'

    deleteButton.textContent="DELETE"
    deleteButton.addEventListener('click',remove)
    
    term.textContent=`${label}:  `
  
    const description = document.createElement('dd')
    
    try {
      description.appendChild(value)

    } catch(e) {
      description.textContent += value
    }
    item.appendChild(term)
    item.appendChild(description)
    item.appendChild(deleteButton)
    return item
  }
  
  const remove=function(ev){
      console.log(ev.target.parentNode)
      const values= (ev.target.parentNode.children)
      keyword= (values[1].textContent)
      for(var i=0;i<master.length;i++){
        if(master[i]['input'] ==keyword){
          master.splice(i,1)
          break
        }
      }
      debugger
      var dl_item=ev.target.parentNode.parentNode
      //console.log(ev.target.parentNode.parentNode.parentNode)
      dl_item.parentNode.removeChild(dl_item)
      
  }

form.addEventListener('submit', handleSubmit)
