import React from 'react'

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
  }
  addDoneItem(index) {
    this.props.addDoneItem(index)
  }
  removeDoneItem(index) {
    this.props.removeDoneItem(index)
  }
  render() {
    const { type, content, index } = this.props
    return (
      <li className="list-group-item">
        <div className="row justify-content-between">
          <div className="col-6 font-weight-bold content">{content}</div>
          <div className="col-4 row justify-content-center">
            {
              type === 'todo' ?
                <button
                  className="btn btn-primary col"
                  onClick={this.addDoneItem.bind(this, index)}
                >
                  Done
                </button> :
                <button
                  className="btn btn-danger col"
                  onClick={this.removeDoneItem.bind(this, index)}
                >
                  Delete
                </button>
            }
          </div>
        </div>
      </li>
    )
  }
}
export default TodoItem
