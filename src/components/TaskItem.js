import React, { Component } from 'react';

export class TaskItem extends Component {
    onUpdateStatus = () => {
      this.props.onUpdateStatus(this.props.task.id)
    }
     render() {
      const {task, index} = this.props;
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <span 
                  className={ task.status === true ? 'btn btn-success' : 'btn btn-warning'}
                  onClick = {this.onUpdateStatus}
              >
                {task.status === true ? 'Kích hoạt' : 'Ẩn' }
              </span>
            </td>
            <td>John</td>
          </tr>
        )
    }
}

export default TaskItem
