import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container-fluid">
        <div className="footer">
          <span className="text-white">
            Made with{" "}
            <FontAwesomeIcon icon="heart" className="mr-2 ml-2 heart" />
            by{" "}
            <a
              href="http://samardev.com/"
              className="text-reset text-decoration-none"
            >
              <span className="font-weight-bold ml-1">Samar Jaffal</span>
            </a>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
