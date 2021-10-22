import React from 'react';
import { connect } from 'react-redux';
import { edit } from '../actionCreators/edit';

import '../TodoItem.css'

class Edit extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            ...props.state.todos.find(x => x.id === parseInt(this.props.match.params.id))
        }
        
    }

    async onSubmit(e) {
        e.preventDefault(); 
    }

    onChange(e)
    {
        const {name, value, checked,type} = e.target
        this.setState({
            [name]: type !== "checkbox" ? value : checked 
        })

    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)} name="todoForm" >
                <input style={{ display: 'none' }} name="id" value={this.state.id} onChange={(e) => this.onChange(e)} />
                <div className="form-group">
                    <label htmlFor="text">Text:</label>
                    <input value={this.state.text} onChange={(e) => this.onChange(e)} type="text" name="text" className="form-control" />
                </div>
                <div className="form-group ">     
                    <label className='checkbox'>
                        <input type='checkbox' name="completed" className="checkbox_input" onChange={(e) => this.onChange(e)} checked={this.state.completed}/>
                        <div className='checkbox_div'></div>                   
                    </label>              
                </div>
                <button id="edit" onClick={() => this.props.edit(this.state)} className="btn btn-primary">Edit</button>
                <button id="reset" type="reset" className="btn btn-primary">Reset</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch)
{
  return { 
    edit: (todo) => edit(todo)
  }
}

function mapStateToProps(state)
{
    return {
      state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);