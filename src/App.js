import React, {Component} from "react";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export class App extends Component  {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }
  onGenerateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'Học ReactJS',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Học ReactJS',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Học ReactJS',
        status: true
      }
    ]
    
    this.setState({
      tasks: tasks
    }); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      });
    }
  }

  s4(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }

  generateID(){
    return  this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()
  }

  onDisplayForm = () => {
    this.setState ({
      isDisplayForm : !this.state.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState ({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
       tasks : tasks 
    });
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  findIndex = (id) => {
    var result = -1
    var { tasks } = this.state;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result = index;
      }
    });
    return result;
  }

  render() {
    const {tasks, isDisplayForm} = this.state;
    var elmTaskForm = isDisplayForm 
      ? <TaskForm  
          onCloseForm={this.onCloseForm}
          onSubmit = {this.onSubmit}
        /> 
      : "";
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick= {this.onDisplayForm}
            >
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
            <TaskList 
              tasks={tasks}
              onUpdateStatus= {this.onUpdateStatus}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
