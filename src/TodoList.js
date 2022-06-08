class TodoList {
  constructor() {
    this.id = 0
    this.items = []
    this.date = 0
  }

  create(str,date) {
    this.id++
    const item = { id: this.id, text: str, status: 'incomplete', date: date}
    this.items.push(item)
    return item
  }

  returnByDate (searchDate) {
    let searchByDate =[]
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].date === searchDate) {
        searchByDate.push(this.items[i])
      }
     return searchByDate
    }
  }

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
