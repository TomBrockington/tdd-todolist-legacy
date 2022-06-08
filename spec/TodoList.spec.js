const TodoList = require('../src/TodoList.js')

describe('TodoList', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('creates a todo item', () => {
    // set up
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date:25
      
    }

    // execute
    const result = todoList.create('turn the heating on!',25)

    // verify
    expect(result).toEqual(expected)
  })

  it(' check for 20...', () => {
    // set up
    const expected = {
      id: 1,
      text: 'turn the heating on!...',
      status: 'incomplete',
      date:25
    }

    // execute
    todoList.create('turn the heating on!',25)
    const result = todoList.show20()

    // verify
    expect(result).toEqual(expected)
  })

  it('returns all items', () => {
    // set up
    const item1 = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date:25
    }
    const item2 = {
      id: 2,
      text: 'Do the washing up',
      status: 'incomplete',
      date:26
    }
    const expected = [item1, item2]

    // execute
    todoList.create('turn the heating on!',25)
    todoList.create('Do the washing up',26)

    // verify
    expect(todoList.showAll()).toEqual(expected)
  })

  it('sets item to be complete if found', () => {
    // set up
    const item1 = todoList.create('turn the heating on!',25)
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'complete',
      date:25
    }

    // execute
    const result = todoList.setComplete(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.setComplete(1)).toThrowError('Item not found')
  })

  it('gets incomplete items', () => {
    // set up
    const item1 = todoList.create('turn the heating on!',25)
    const item2 = todoList.create('Do the washing up',26)
    todoList.setComplete(item1.id)
    const expected = [item2]

    // execute
    const result = todoList.getByStatus('incomplete')

    // verify
    expect(result).toEqual(expected)
  })

  it('gets complete items', () => {
    // set up
    const item1 = todoList.create('turn the heating on!',25)
    const item2 = todoList.create('Do the washing up',26)
    todoList.setComplete(item1.id)
    const expected = [item1]

    // execute
    const result = todoList.getByStatus('complete')

    // verify
    expect(result).toEqual(expected)
  })

  it('finds item by id', () => {
    // set up
    const item1 = todoList.create('turn the heating on!',25)
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date:25
    }

    // execute
    const result = todoList.findBy(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('findBy throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.findBy(1)).toThrowError('Item not found')
  })

  it('deletes item by id', () => {
    // set up
    const item1 = todoList.create('turn the heating on!',25)
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date:25
    }

    // execute
    const deletedItem = todoList.deleteBy(1)

    // verify
    expect(deletedItem).toEqual(expected)
    expect(todoList.showAll()).toEqual([])
  })

  it('delete throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.deleteBy(1)).toThrowError('Item not found')
  })

  it('search by date empty',()=>{
    todoList.create('turn the heating on!',25)
    const expected =[]
    const result = todoList.returnByDate (24)

    expect(result).toEqual(expected)
  })

  it ('search by date list',()=>{
    todoList.create('turn the heating on!',25)
    todoList.create('Do the washing up',25)

    const expected= [{
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date:25
    },
    {
      id: 2,
      text: 'Do the washing up',
      status: 'incomplete',
      date:25
    }

    ]

    const result = todoList.returnByDate(25)

    expect(result).toEqual(expected)
  })



})
