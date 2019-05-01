import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="sticky-footer" className="py-2 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
