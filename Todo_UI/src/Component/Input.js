import Header from "./Header";
import Showlist from "./Showlist";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Design/Input.css";

export default function Input() {

return (
        <>
            <div className="container mt-5">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 Main">
                    <Showlist />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center position-relative">
                    <button
                        className="position-absolute btnn"
                    >
                        +
                    </button>
                    </div>
                </div>
            </div>
        </>
        )

}