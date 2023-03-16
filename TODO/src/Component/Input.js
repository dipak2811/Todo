import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Showlist from "./Showlist";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Design/Input.css";

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default function Input() {
  const ref_input = useRef();
  const [list, setList] = useState([]);

  const btn_style2 = {
    btnn: {
      opacity: "0.8",
      color: "black",
      borderRadius: "50px",
      padding: "10px",
      width: "100px",
      border: "none",
      backgroundColor: "#5ad3a0",
      fontSize: "xx-large",
      fontWeight: "lighter",
      height: "100px",
      top: "-50px",
    },
  };
  const btn_style1 = { btnn: { display: "none" } };
  const [btn_style, setBtn_style] = useState(btn_style2);
  const input_style2 = {
    Add: { display: "inline", backgroundColor: "#5ad3a0", border: "none" },
    Input: { display: "inline", borderRadius: "0px" },
  };
  const input_style1 = {
    Add: { display: "none" },
    Input: { display: "none" },
  };
  const [input_style, setInput_style] = useState(input_style1);

  useEffect(() => {
    if (document.cookie.length !== 0) {
      let x = JSON.parse(getCookie("Todo"));
      console.log(x);
      setList(x);
    }

    return document.removeEventListener("keyup", () => {}, false);
  }, []);
  document.addEventListener(
    "keyup",
    (event) => {
      if (event.key === "Escape") {
        setBtn_style(btn_style2);
        setInput_style(input_style1);
        console.log(event.key);
      }
    },
    false
  );
  const add = () => {
    setBtn_style(btn_style1);
    setInput_style(input_style2);
  };

  const submithnd = () => {
    if (ref_input.current.value.length === 0) {
      alert("Enter Something");  
      return;
    }
    let lst = JSON.stringify(list);
    lst = JSON.parse(lst);
    lst.push({ value: ref_input.current.value, ischecked: false });
    setList(lst);
    let cookie = `Todo=${JSON.stringify(lst)}; max-age=86400; path=/`;
    document.cookie = cookie;
    ref_input.current.value = "";
  };
  return (
    <>
      <div className="container mt-5">
        <Header />
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 Main">
                <div className="Main_Part">
                  <Showlist val={list} />
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center position-relative">
            <button
              className="position-absolute"
              style={btn_style.btnn}
              onClick={add}
            >
              +
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 px-0 mt-2 justify-content-between d-flex ">
            <input
              type="text"
              className="Input w-100 border border-3"
              style={input_style.Input}
              placeholder="Enter Task"
              ref={ref_input}
            />
            <button
              style={input_style.Add}
              type="button"
              className="btn btn-primary Add"
              onClick={submithnd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
