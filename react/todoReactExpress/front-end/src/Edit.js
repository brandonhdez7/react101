import React, {Component} from 'react';
import axios from 'axios';

class Edit extends Component{
    constructor(){
        super();
        this.state = {
            task: {}
        }
    }

    componentDidMount(){
        console.log(this.props)
        const tid = this.props.match.params.id;
        axios({
            method: 'GET',
            url: `http://localhost:3000/getTasks/${tid}`
        }).then((tasksFromBackEnd)=>{
            this.setState({
                tasks: tasksFromBackEnd.data
            })
        })
    }



    render(){
        console.log(this.state.tasks)
        return(
            <div className="container">
            <form onSubmit={this.addNewTask} className="add-box">
              <input type="text" id="new-task" value={this.state.tasks.taskName} />
              <input type="date" id="new-task-date" value={this.state.tasks.taskDate}/>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>      
          </div> 
        )
    }
}

export default Edit;