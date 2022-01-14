import React from "react";
import InputPostComment from "./InputPostComment";
import PostCardBody from "./PostCardBody";
import PostCardFooter from "./PostCardFooter";
import PostCardHeader from "./PostCardHeader";
import PostComments from "./PostComments";

const SingleUserPosts = ({  post }) => {
 
 
  return (
    <div className="posts">
      {post &&
        post.length > 0 &&
        post.map((pos) => (
          <div
            className="postCards"
            key={pos._id}
            style={{
              backgroundColor: "white",
              padding: "1rem",
              marginTop: "1rem",
              borderRadius: "10px",
              boxShadow: "3px 3px 5px gray",
              width: "500px",
            }}
          >
            <PostCardHeader pos={pos} />
            <PostCardBody pos={pos} />
            <PostCardFooter pos={pos} />
            <PostComments pos={pos} />
            <InputPostComment pos={pos} />
          </div>
        ))}
    </div>
  );
};

export default SingleUserPosts;
