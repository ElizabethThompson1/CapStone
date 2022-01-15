import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/actions/ProfileActions";

import { checkimage } from "../../utils/ImageUpload";

const EditProfile = ({ user, SetOnEdit }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const initState = {
    website: "",
    fullname: "",
    bio: "",

  };
  const [editData, setEditData] = useState(initState);
  const { fullname, bio } = editData;
  const [image, setImage] = useState("");


  const changeImage = (e) => {
    const file = e.target.files[0];
    const err = checkimage(file);
    if (err) return dispatch({ type: "ALERT", payload: { error: err } });
    setImage(file);
  };
  useEffect(() => {
    setEditData(user);
  }, [user]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const selectupload = () => {
    const fileuploadinput = document.getElementById("file-upload");
    fileuploadinput.click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ editData, image, auth }));
    SetOnEdit(false);
  };
  return (
    <div className="editprofile">
      <div className="editprofile-content">
        <div className="editprofile-head">
          <h4 className="editprofile-headtitle">Edit Your Profile</h4>
          <button
            className="editprofile-headclose"
            onClick={() => SetOnEdit(false)}
          >
            
          </button>
        </div>
        <div className="editprofile-image">
          <img
            src={image ? URL.createObjectURL(image) : auth.user.image}
            alt=""
          />
          <i className="fas fa-camera" onClick={selectupload}>
            <p className="editprofile-userdatapara">Change Pic</p>
          </i>
          <span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={changeImage}
            />
          </span>
        </div>
        <div className="editprofile-userdata">
          <label htmlFor="fullname">FullName</label>
          <div className="editprofile-userdatafullname">
            <input
              type="text"
              value={fullname}
              onChange={handleChangeInput}
              name="fullname"
              placeholder="Type your name"
            />
            <p className="editprofile-userdatapara">{fullname.length}/25</p>
          </div>
          
          <label htmlFor="bio">Bio</label>
          <div className="editprofile-userdatabio">
            <input
              type="bio"
              value={bio}
              onChange={handleChangeInput}
              name="bio"
              placeholder="Type your Bio "
            />
            <p className="editprofile-userdatapara">{bio.length}/200</p>
          </div>
          <button onClick={handleSubmit} className="editprofile-userdatabutton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
