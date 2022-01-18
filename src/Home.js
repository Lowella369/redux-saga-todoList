import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class App extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const todoList = this.props.data;
    return (
      <div className = "App">
          <h1> Todo List 1 </h1>  
          <label>User ID:</label>{
            <input type="text" value={todoList.userId}></input>
          }
          <br></br>
          <label>Task ID:</label>{
            <input type="text" value={todoList.id}></input>
          }
          <br></br>
          <label>Task Name:</label>{
            <input type="text" value={todoList.title}></input>
          }
          <br></br>
          <label>Task Status:</label>{
            <input type="text" value={todoList.completed}></input>
          }
      </div>
  );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
