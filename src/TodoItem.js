import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from './actionCreators/remove';
import { toggle } from './actionCreators/toggle';

class TodoItem extends React.Component {

  
  constructor(props)
  {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.state = {
      ...props.todo
    }
    this.styles = {
      backgroundColor: this.state.completed ? 'gray' : ''
    }
  }

  

  onChange(e)
  {
    this.setState({
      completed: e.target.checked
    })
    this.styles = {
      ...this.styles,
      backgroundColor: e.target.checked ? 'gray' : ''
    }

  }
  
  render()
  {
    return(
      <div style={this.styles} className='todo-item'>
            <label className='checkbox'>
              <input type='checkbox' className="checkbox_input" onChange={() => this.props.toggle(this.state.id)} checked={this.state.completed}/>
              <div className='checkbox_div'></div>
              <p>{this.props.todo.text}</p>
            </label>
            <Link to={"/Edit/" + this.state.id} className='btn'>Edit</Link>
            <button className='btn' onClick={() => this.props.remove(this.state.id)}>Delete</button>
      </div>
    )
  }
}
  
function mapDispatchToProps(dispatch)
{
  return {
    remove: (id) => dispatch(remove(id)),
    toggle: (id) => dispatch(toggle(id))
  }
}

function mapStateToProps(state)
{
  return {state};
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);