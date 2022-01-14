import React from 'react';


import moment from 'moment'


const About = ({userData, dispatch, auth, profile,  id} ) =>{



return (
        <div className="profileabout">
            {userData.length > 0  && userData.map(user=> (
                <div className="profileabout-container" key={user._id}>
                    <div className="profileabout-contenttop">
                        <h4 className="profileabout-contenttop-head">About Me:</h4>
                        
                    </div>
                    <div  className="profileabout-contentcenter">
                            <p className="profileabout-contentcenter-story">{user.bio}</p>
                    </div>
                    <div className="profileabout-contentbottom">
                        <div className="profileabout-contentbottominfo">
                        <h6 className="profileabout-contentbottominfo-head"> Joined </h6>
                        <p className='profileabout-contentbottominfo-body'> {moment(user.createdAt).format('YYYY-MM-DD')}</p>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default About;