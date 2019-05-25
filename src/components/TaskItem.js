import React, { Component } from "react";

export class TaskItem extends Component {
  onUpdateStatus = () => {
    console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  }
  onUpdate = () => {
    console.log('đafad')
    this.props.onUpdate(this.props.task.id);
  }
  render() {
    const { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true ? "btn btn-success" : "btn btn-warning"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick = {this.onUpdate}
          >
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
           Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
