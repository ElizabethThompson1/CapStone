import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeLeft from '../../components/HomeLeft/HomeLeft';
import HomeMid from "../../components/HomeMid/HomeMid";
import "./Home.css"



const Home = () =>{
    return (
        <div className="home">
            <div className="homebanner">
                <Banner/>
            </div>
            <div className="homemaincontainer">
                <div className="homemain-contentleft">
                    <HomeLeft/>
                </div>
                <div className="homemain-contentmid">
                    <HomeMid/>
                </div>
            </div>
            
        </div>
    )
}
export default Home;