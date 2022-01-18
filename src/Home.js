import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ToDo from "./components/ToDo"
import "./Home.css"

import { requestApiData } from "./actions";

class App extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const todoList = Array.from(this.props.data)
    console.log(todoList)
    return (
      <div className="Home">
        <h3>Task Lists</h3>
        {todoList.map(todo => (
          <ToDo key={todo.id} todo={todo}></ToDo>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
