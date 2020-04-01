import React from "react";
import md5 from "md5";

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`https://es.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    ></img>
  );
}

export default Gravatar;
