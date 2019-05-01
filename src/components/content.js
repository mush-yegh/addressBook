import React, { Component } from "react";
import AddressBooks from "./addressBooks";
import style from "./index.css";

const AddItem = ({ visibility, handleSave, handleCancel }) => {
  return visibility ? (
    <div className="background">
      <div className="addItemBlock">
        <div className="addItemRow">
          <label htmlFor="fName">First name: </label>
          <input type="text" id="fName" />
        </div>
        <div className="addItemRow">
          <label htmlFor="lName">Last name: </label>
          <input type="text" id="lName" />
        </div>
        <div className="addItemRow">
          <button className="btn btn-sm  m-2 btn-dark" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-sm  m-2 btn-dark" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

class Content extends Component {
  state = {
    addressBook: [
      {
        id: 1,
        fName: "Name1",
        lName: "Lname1"
      },
      {
        id: 2,
        fName: "Name2",
        lName: "Lname2"
      },
      {
        id: 3,
        fName: "Name3",
        lName: "Lname3"
      }
    ],
    addItemVisibility: false
  };

  handleClick = () => {
    console.log("add button clicked!");
    this.setState({ addItemVisibility: !this.state.addItemVisibility });
  };
  handleSave = () => {
    console.log("save button clicked!");
  };
  handleCancel = () => {
    console.log("Cancel button clicked!");
    //this.setState({ addItemVisibility: false });
    this.handleClick();
  };
  render() {
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="clearfix">
              <button
                onClick={this.handleClick}
                className="btn btn-sm float-right m-2 btn-success"
              >
                Add
              </button>
            </div>

            <AddressBooks addressBook={this.state.addressBook} />
          </div>
        </div>

        <AddItem
          visibility={this.state.addItemVisibility}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default Content;
