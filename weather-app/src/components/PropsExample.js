// Properties that are compulsory --> pass them as attributes
// Dynamic/optional HTML content -->  pass in between component tags and use props.children

import React from "react";

// function PropsExample(props) {
//   console.log(props);
//   return <div>Hello Reactor</div>;
// }
const PropsExample = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.specialName}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default PropsExample;
