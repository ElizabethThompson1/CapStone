import React from "react";
import GlobalCard from "../GlobalCard/GlobalCard";

const FollowingCard = ({ user }) => {
  return (
    <>
      <div
        style={{
          width: "1100px",
          maxWidth: "100%",
          minHeight: "20px",
          padding: "1rem",
          margin: "1rem auto",
          background: "white",
        }}
      >
        <h4 style={{ textAlign: "center" }}>
          {user} <span> Following </span>
        </h4>
      </div>
      <div
        style={{
          width: "1100px",
          maxWidth: "100%",
          margin: "1rem auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {user > 0 && user.map((fol) => <GlobalCard user={fol} key={fol._id} />)}
      </div>
    </>
  );
};

export default FollowingCard;
