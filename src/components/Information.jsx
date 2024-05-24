import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="grid-center">
        <div className="align-text-center">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Tecalcrypt logo"
            style={{ height: 200, width: 200 }}
          />
          <p>
            <code>
              Let F(w,x,y,z) = 48630347521w + 73859288608x + 86947812561y +
              93738008736z = <b>S</b>
            </code>
          </p>
          <p>
            <code>
              Using only <b>S</b> and Titutech constants, we can calculate the
              exact integer inputs with 100% accuracy.
            </code>
          </p>
          <p>
            <code>
              <b>For this demo build w, x, y, z</b> ranges from -300 to +300.
            </code>
          </p>
        </div>
      </div>
    );
  }
}

export default Information;
