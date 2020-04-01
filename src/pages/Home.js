import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import Astronauts from "../images/astronauts.svg";
import PlatziConfLogo from "../images/platziconf-logo.svg";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="row mx-auto">
            <div className="Home__col col-sm-12 col-md-4">
              <img
                src={PlatziConfLogo}
                alt="Platzi Conf Logo"
                className="img-fluid"
              />
              <div className="conf-info mt-4">
                <h2>PRINT YOUR BADGES</h2>
                <p className="description-info-home">
                  The easiest way to manage your conference
                </p>
                <div className="button-home">
                  <Link to="/badges" className="btn btn-primary">
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="Home__col col-sm-12 col-md-8 d-none d-md-block">
              <img
                src={Astronauts}
                alt="Home Astronauts"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
