import React, { Component } from "react";

class AddressBooks extends Component {
  state = {};
  render() {
    let newsTemplate = this.props.addressBook.map(item => {
      return (
        <div key={item.id} className="clearfix">
          <div className="float-left">{item.fName} </div>

          <button className="btn btn-sm float-right m-2 btn-danger">
            Delete
          </button>
          <button className="btn btn-sm float-right m-2 btn-warning">
            Edit
          </button>
        </div>
      );
    });
    return <div>{newsTemplate}</div>;
  }
}

export default AddressBooks;
