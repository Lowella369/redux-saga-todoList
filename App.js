import React from 'react'
import { connect } from 'react-redux'
import { requestApiData } from './actions'

class Todos extends React.Component {
  componentDidMount() {
    this.props.fetchAll()
  }
  render() {
    const { todos } = this.props.state
    const results = todos.length != 0 ? todos : []
    return (
        <div className = "App">
        <h1> Todo List 1 </h1>  
        <label>User ID:</label>{
          <input type="text" value={todoLists.userId}></input>
        }
        <br></br>
        <label>Task ID:</label>{
          <input type="text" value={todoLists.id}></input>
        }
        <br></br>
        <label>Task Name:</label>{
          <input type="text" value={todoLists.title}></input>
        }
        <br></br>
        <label>Task Status:</label>{
          <input type="text" value={todoLists.completed}></input>
        }
    </div>
    )
  }
}

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => ({ fetchAll: () => dispatch(requestApiData()) })

export default connect(mapStateToProps, mapDispatchToProps)(Todos)