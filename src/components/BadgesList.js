import React from "react";
import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  //normal search
  // const filteredBadges = badges.filter(badge => {
  //   return `${badge.firstName} ${badge.lastName}`
  //     .toLowerCase()
  //     .includes(query.toLowerCase());
  // });

  //filter with react hook
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  // if (filteredBadges.length === 0) {
  //   return (

  //   );
  // }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {filteredBadges.length === 0 && (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new Badge
          </Link>
        </div>
      )}
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none BadgesListItem-info"
                to={`/badges/${badge.id}`}
              >
                <div className="row">
                  <div className="col-4 text-center">
                    <Gravatar
                      className="BadgesListItem__avatar"
                      email={badge.email}
                    />
                  </div>
                  <div className="col">
                    <p>
                      <strong>
                        {badge.firstName} {badge.lastName}
                      </strong>
                    </p>
                    <p className="text-info">
                      <FontAwesomeIcon icon={["fab", "twitter"]} /> @
                      {badge.twitter}
                    </p>
                    <p>{badge.jobTitle}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgesList;
