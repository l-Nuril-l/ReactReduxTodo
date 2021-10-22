import React from "react"
import { connect } from "react-redux";
import { create } from '../actionCreators/create';


class Create extends React.Component {

    constructor(props)
    {
        super(props)
        this.state= {
            id: 0,
            text: '',
            completed: false,
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        //if (this.state.id === 0)
            
        
    }

    onChange(e)
    {
        const {name, value, checked,type} = e.target
        this.setState({
            [name]: type !== "checkbox" ? value : checked 
        })

    }

  render()
  {
    return (
        <form onSubmit={(e) => this.onSubmit(e)} name="todoForm">
        <input style={{ display: 'none' }} name="todoId" value={this.state.todoId} />
        <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input value={this.state.text} onChange={(e) => this.onChange(e)} type="text" name="text" className="form-control" />
        </div>
        <div className="form-group">                   
            <label className='checkbox'>
                <input type='checkbox' name="completed" className="checkbox_input" onChange={(e) => this.onChange(e)} checked={this.state.completed}/>
                <div className='checkbox_div'></div>
            </label>               
        </div>
        <button id="create" onClick={() => this.props.create(this.state)} className="btn btn-primary">Create</button>
        <button id="reset" type="reset" className="btn btn-primary">Reset</button>
        </form>
      )
  } 
}

function mapDispatchToProps(dispatch)
{
  return {
    create: (todo) => dispatch(create(todo))
  }
}

export default connect(null,mapDispatchToProps)(Create);
