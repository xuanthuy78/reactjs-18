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
      isDisplayForm: false,
      taskEditting: null
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

  onShowForm = () => {
    this.setState ({
      isDisplayForm: true
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
    console.log(this.state.tasks);
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      // console.log(tasks[index].name)
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  onDelete = (id) => {
    console.log('id', id)
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if (index !==  -1) {
      tasks.splice(index,1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditting = tasks[index];
    console.log(taskEditting)
    this.setState({
      taskEditting : taskEditting
    })
    this.onShowForm();
  }

  findIndex = (id) => {
    var result = -1
    var { tasks } = this.state;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        console.log(index);
        result = index;
      }
    });
    return result
  }

  render() {
    const {tasks, isDisplayForm, taskEditting} = this.state;
    var elmTaskForm = isDisplayForm 
      ? <TaskForm  
          onCloseForm={this.onCloseForm}
          onSubmit = {this.onSubmit}
          task = {taskEditting}
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
              onDelete = {this.onDelete}
              onUpdate = {this.onUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
