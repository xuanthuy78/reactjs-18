import React, { Component } from 'react'

export class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            status: false
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit =(event)=> {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClean();
        this.onCloseForm();
    }

    onClean = () => {
        this.setState({
            name : '',
        })
    }

    render() {
        const {name, status} = this.state;
        return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onCloseForm}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value ={name}
                            onChange = {this.onChange}
                           
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        name="status"
                        value ={status}
                        onChange = {this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select><br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            <span 
                                className="fa fa-plus mr-5"
                            ></span>Lưu Lại
                        </button>&nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick = {this.onClean}
                        >
                            <span 
                                className="fa fa-close mr-5"
                            ></span>Hủy Bỏsss
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default TaskForm
