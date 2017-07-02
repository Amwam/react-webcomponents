import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  render() {
    return <div>Hello world! This was rendered using React!</div>;
  }
}

/*
function BabelHTMLElement() {
  const newTarget = Object.getPrototypeOf(this).constructor;
  return Reflect.construct(HTMLElement, [], newTarget);
}

Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype);
*/

class CustomHTMLElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<MyComponent />, this);
  }
}

customElements.define("x-test", CustomHTMLElement);
