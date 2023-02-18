import React, { Component } from "react";

export class PropsExampleClass extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>
          Hello {this.props.name} a.k.a {this.props.specialName}
        </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default PropsExampleClass;
