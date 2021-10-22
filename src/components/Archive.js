import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import TodoItem from "../TodoItem"
import { connect } from 'react-redux';

class Archive extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      mapped: props.mapped,
    }
  }

  render()
  {
    return (
      <>
        {this.state.mapped}
      </>
    );
  }

  static getDerivedStateFromProps(props, state)
  {
    return { mapped: props.mapped}
  }

}

function mapStateToProps(state)
{
    return {
      mapped: state.todos.filter(x => x.completed === true).map(todo => <TodoItem key={todo.id} todo={todo} />)
    }
}

export default connect(mapStateToProps)(Archive);
