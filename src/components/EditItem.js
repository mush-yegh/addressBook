import React, { Component } from "react";

class EditItem extends Component {
  state = {
    id: this.props.itemToEdit.id,
    fName: this.props.itemToEdit.fName,
    lName: this.props.itemToEdit.lName,
    country: this.props.itemToEdit.country,
    city: this.props.itemToEdit.city
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { saveEditedItem, handleCancelBtn } = this.props;
    return (
      <div className="background">
        <div className="backgroundIn">
          <div className="addItemBlock row justify-content-center">
            <div className="addItemRow col-md-12">
              <div className="row">
                <div className="col-md-5 text-right">
                  <label htmlFor="fName">First name: </label>
                </div>
                <div className="col-md-7 text-left">
                  <input
                    type="text"
                    id="fName"
                    value={this.state.fName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="addItemRow col-md-12">
              <div className="row">
                <div className="col-md-5 text-right">
                  <label htmlFor="lName">Last name: </label>
                </div>
                <div className="col-md-7 text-left">
                  <input
                    type="text"
                    id="lName"
                    value={this.state.lName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="addItemRow col-md-12">
              <div className="row">
                <div className="col-md-5 text-right">
                  <label htmlFor="country">Country: </label>
                </div>
                <div className="col-md-7 text-left">
                  <input
                    type="text"
                    id="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="addItemRow col-md-12">
              <div className="row">
                <div className="col-md-5 text-right">
                  <label htmlFor="city">City: </label>
                </div>
                <div className="col-md-7 text-left">
                  <input
                    type="text"
                    id="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="addItemRow col-md-9">
              <div className="row">
                <div className="col-md-3" />
                <div className="col-md-7">
                  <button
                    className="btn btn-sm  m-2 btn-primary"
                    onClick={handleCancelBtn}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-sm  m-2 btn-primary"
                    onClick={() => {
                      saveEditedItem(this.state);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditItem;
