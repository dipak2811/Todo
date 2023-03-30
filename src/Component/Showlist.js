import "bootstrap/dist/css/bootstrap.min.css";
import "./Design/Showlist.css";
import React from "react";

class Showlist extends React.Component {
  state={flag:false};
  chkhdl=(ind)=>{
      this.props.val[ind].ischecked=this.props.val[ind].ischecked?false:true;
      this.setState({flag:!this.state.flag});
      document.cookie=`Todo=${JSON.stringify(this.props.val)}; max-age=86400; path=/`;
      }
  render() {
    return this.props.val.length === 0 ? (
      <div className="Main_Class text-center mt-4">List is Empty</div>
    ) : (
      <div className="Main_Class text-center">
        <div className="List w-100">
          {this.props.val.map((item, ind) => {
            return (
              <div
                key={ind}
                className="justify-content-between d-flex py-4 mx-5"
              >
                {item.ischecked?<div className="Completed">{item.value}</div>
                :<div>{item.value}</div>}
                <div className="round">
                {item.ischecked?<input
                    type="checkbox"
                    id={`checkbox${ind}`}
                    onClick={() => this.chkhdl(ind)}
                    checked={true}
                  />:<input
                  type="checkbox"
                  id={`checkbox${ind}`}
                  onClick={() => this.chkhdl(ind)} />}
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