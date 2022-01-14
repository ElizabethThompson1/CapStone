import React from "react";

const GlobalShortCard = ({ friend }) => {
  console.log(friend);
  return (
    <div className="globalshortcard">
      <img
        className="globalshortcardcontentimage"
        src={friend.image}
        alt=""
      />
      <div className="globalshortcardcontentinfo">
        <h4 className="globalshortcardcontentinfofullname">
          {friend.fullname}
        </h4>
        <h6 className="globalshortcardcontentinfousername">
          {friend.username}
        </h6>
      </div>
    </div>
  );
};

export default GlobalShortCard;
