class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str) {
    this.id++
    const item = { id: this.id, text: str, status: 'incomplete' }
    this.items.push(item)
    return item
  }

<<<<<<< HEAD
  

  showAll () {
=======
  show20() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].text.length >= 20) {
        console.log('string ', this.items[i].text.substring(0, 20))
        this.items[i].text = this.items[i].text.substring(0, 20) + '...'
        return this.items[0]
      }
    }
  }

  showAll() {
>>>>>>> 34e1c6db6ca9d2a5cf9043427a95346bfd6370a1
    return this.items
  }

  setComplete(id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  findBy(id) {
    const item = this.items.find((item) => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = TodoList
