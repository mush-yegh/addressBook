import React, { Component } from "react";
import AddressBooks from "./AddressBooks";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import "./index.css";

class Content extends Component {
  state = {
    currId: 3,
    addItemVisibility: false,
    editItemVisibility: false,
    addressBooks: [
      {
        id: 1,
        fName: "Name 1",
        lName: "Last name 1",
        country: "country 1",
        city: "city 1"
      },
      {
        id: 2,
        fName: "Name 2",
        lName: "Last name 2",
        country: "country 2",
        city: "city 2"
      },
      {
        id: 3,
        fName: "Name 3",
        lName: "Last name 3",
        country: "country 3",
        city: "city 3"
      }
    ],
    itemToEdit: null
  };

  toggleAddVisibility = () => {
    this.setState({ addItemVisibility: !this.state.addItemVisibility });
  };

  toggleEditVisibility = () => {
    this.setState({ editItemVisibility: !this.state.editItemVisibility });
  };

  addItem = addressBook => {
    addressBook.id = this.state.currId + 1;
    this.setState({
      currId: addressBook.id,
      addressBooks: [...this.state.addressBooks, addressBook]
    });
    this.toggleAddVisibility();
  };

  deleteItem = id => {
    const addressBooks = this.state.addressBooks.filter(item => {
      return item.id !== id;
    });
    this.setState({ addressBooks: addressBooks });
  };

  editItem = id => {
    const itemToEdit = this.state.addressBooks.find(item => item.id === id);
    this.setState({
      itemToEdit: itemToEdit
    });
    this.toggleEditVisibility();
  };

  saveEditedItem = editedItem => {
    const addressBooks = this.state.addressBooks.map(item => {
      if (item.id === editedItem.id) {
        return {
          id: item.id,
          fName: editedItem.fName,
          lName: editedItem.lName,
          country: editedItem.country,
          city: editedItem.city
        };
      }
      return item;
    });

    this.setState({
      addressBooks: addressBooks
    });

    this.toggleEditVisibility();
  };

  render() {
    return (
      <div className="container text-center" id="page-content">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="clearfix">
              <button
                onClick={this.toggleAddVisibility}
                className="btn btn-sm float-right m-2 btn-success"
              >
                Add
              </button>
            </div>
            <AddressBooks
              addressBooks={this.state.addressBooks}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
          </div>
        </div>
        {this.state.addItemVisibility ? (
          <AddItem
            addItem={this.addItem}
            handleCancelBtn={this.toggleAddVisibility}
          />
        ) : null}
        {this.state.editItemVisibility ? (
          <EditItem
            saveEditedItem={this.saveEditedItem}
            handleCancelBtn={this.toggleEditVisibility}
            itemToEdit={this.state.itemToEdit}
          />
        ) : null}
      </div>
    );
  }
}

export default Content;
