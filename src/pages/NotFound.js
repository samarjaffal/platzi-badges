import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import LostAstronaut from "../images/404.png";
function NotFound() {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="row mx-auto">
          <div className="Home__col col-8">
            <img
              src={LostAstronaut}
              alt="404 Error"
              className="img-fluid mx-auto"
            />
          </div>
          <div className="Home__col col-4">
            <div className="404-info text-left">
              <h1 className="f4r">404 Error!</h1>
              <p>Page Not Found</p>
              <p>
                <strong>Are you lost?</strong> We did not find what you were
                looking for :(
              </p>
              <div className="">
                <Link to="/" className="btn btn-primary">
                  Go back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
