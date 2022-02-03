import * as React from "react";

let Logo ="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/a2cpv3wvw7t0o4iybovk";

export default class ShowLogo extends React.Component <{}> {
  render() {
    return (
      <div>
        <div>
          <img height="250" src={Logo} /> 
        </div>
      </div>
    );
  }
}