import React, { Component } from 'react'

export class TaskSearch extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3">
                <div className="input-group">
                <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                    <span className="fa fa-search mr-5" />Tìm
                    </button>
                </span>
                </div>
          </div>
        )
    }
}

export default TaskSearch
