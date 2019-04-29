import React from 'react'
import TodoItem from './TodoItem'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      todoInfo: [],
      doneInfo: []
    }

    this.getInputValue = this.getInputValue.bind(this)
    this.addTodoItem = this.addTodoItem.bind(this)
    this.addDoneItem = this.addDoneItem.bind(this)
    this.removeDoneItem = this.removeDoneItem.bind(this)
  }

  getInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTodoItem(e) {
    if (e.keyCode === 13 && this.state.inputValue) {
      const temp = [...this.state.todoInfo, this.state.inputValue]
      this.setState({
        todoInfo: temp,
        inputValue: ''
      })
    }
  }
  addDoneItem(index) {
    const temp2 = [...this.state.doneInfo, this.state.todoInfo[index]]
    console.log(temp2)
    const temp1 = this.state.todoInfo
    temp1.splice(index, 1)
    console.log(temp1)
    this.setState({
      todoInfo: temp1,
      doneInfo: temp2
    })
  }
  removeDoneItem(index) {
    const temp = this.state.doneInfo
    temp.splice(index, 1)
    this.setState({
      doneInfo: temp
    })
  }

  render() {
    return (
      <div className="todo-container col-12 row justify-content-center">
        <div className="todo-box col-8">
          <div className="todo-input pt-5">
            <input className="form-control"
                   type="text"
                   value={this.state.inputValue}
                   onChange={this.getInputValue}
                   onKeyUp={this.addTodoItem}
            />
          </div>
          <div className="todo-list pt-3">
            {
              this.state.todoInfo.length ?
                <ul className="list-group list-group-flush todo-content">
                  <li className="list-group-item">Todo:</li>
                  {
                    this.state.todoInfo.map((item, index) => (
                      <TodoItem
                        type="todo"
                        content={item}
                        key={index}
                        index={index}
                        addDoneItem={this.addDoneItem}
                      />
                    ))
                  }
                </ul> : ''
            }
            {
              this.state.doneInfo.length ?
                <ul className="list-group list-group-flush done-content">
                  <li className="list-group-item">Done:</li>
                  {
                    this.state.doneInfo.map((item, index) => (
                      <TodoItem
                        type="done"
                        content={item}
                        key={index}
                        index={index}
                        removeDoneItem={this.removeDoneItem}
                      />
                    ))
                  }

                </ul> : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
