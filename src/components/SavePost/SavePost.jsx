import React, { useEffect, useState } from "react";
import { getDataApi } from "../../utils/fetchData";
import SavePostCard from "../SavePostCard/SavePostCard";


const SavedPost = ({ auth }) => {
  const [savedposts, setsavedposts] = useState([]);

  useEffect(() => {
    if (auth.token) {
      getDataApi("savedpost", auth.token)
        .then((res) => {
          setsavedposts(res.data.savedposts);
        })
        .catch((err) => console.log(err));
    }
    return () => setsavedposts([]);
  }, [auth.token]);

  return (
    <div
      style={{
        width: "1100px",
        maxWidth: "100%",
        margin: "1rem auto",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
      }}
    >
      {savedposts.map((savedpost) => (
        <SavePostCard savedpost={savedpost} key={savedpost._id} />
      ))}
    </div>
  );
};
export default SavedPost;
