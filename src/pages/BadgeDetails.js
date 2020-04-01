import React from "react";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

// function useIncreaseCount(max) {
//   const [count, setCount] = React.useState(0);

//   if (count > max) {
//     setCount(0);
//   }

//   return [count, setCount];
// }

function BadgeDetails(props) {
  const badge = props.badge;
  //   const [count, setCount] = useIncreaseCount(4);
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1 className="">
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
                email={badge.email}
              />
            </div>
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                {/* <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase Count: {count}
                </button> */}
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                {/*it's defined en index.html because we had created a new portal for the modal*/}
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  onDeleteBadge={props.onDeleteBadge}
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
