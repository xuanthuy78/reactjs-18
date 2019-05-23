import React, {Component} from "react";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export class App extends Component  {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  // onGenerateData = () => {
  //   let tasks = [
  //     {
  //       id: this.generateID(),
  //       name: 'Học ReactJS',
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'Học ReactJS',
  //       status: false
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'Học ReactJS',
  //       status: true
  //     }
  //   ]
    
  //   this.setState({
  //     tasks: tasks
  //   }); 
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  // componentWillMount() {
  //   if(localStorage && localStorage.getItem('tasks')){
  //     var tasks = JSON.parse(localStorage.getItem('tasks'))
  //     this.setState({
  //       tasks: tasks
  //     });
  //   }
  // }

  // s4(){
  //   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  // }

  // generateID(){
  //   return  this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()
  // }


  render() {
    // const {tasks} = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              Them Công Việc
            </button>
            <button 
              type="button" 
              className="btn btn-danger"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button>
            <TaskControl/>
            <TaskList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
