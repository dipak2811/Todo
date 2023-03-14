import "bootstrap/dist/css/bootstrap.min.css";
import "./Design/Showlist.css";
import React from "react";

class Showlist extends React.Component {
  task = ["Buy a new product","Begin promotional phase","Read an article","Try not to fall asleep","Watch \"Sherlok\"","Begin QA with product","Go for a walk"]
  render() {
    return (
      <div className="Main_Class text-center">
        <div className="w-100">
          {this.task.map((item, ind) => {
            return (
              <div
                key={ind}
                className="justify-content-between d-flex py-4 mx-5"
              >
                {(ind===0 || ind===1)?<div className="Completed">{item}</div>:<div>{item}</div>}
                <div className="round">
                  {(ind===1 || ind===0)?<input
                    type="checkbox"
                    checked={true}
                    id={`checkbox${ind}`}
                  />:<input
                  type="checkbox"
                  id={`checkbox${ind}`}
                />}
                  <label htmlFor={`checkbox${ind}`} key={ind}></label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Showlist;
