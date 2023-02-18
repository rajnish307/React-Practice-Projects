import React from "react";

function JSXExample() {
  //   return (
  //     <div>
  //       <h1>Hello Reactor</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: 1, className: "test" },
    React.createElement("h1", null, "Hello Reactor")
  );
}

export default JSXExample;
