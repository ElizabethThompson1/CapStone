import React, { useEffect, useState } from "react";
import Eventsearch from "../../components/Eventssearch/Eventsearch";
import axios from "axios";

const Events = () => {

    const [eventData, setEventdata] = useState(null);
    const [searchTerm, setSearchTerm] = useState("Texas");
    const [eventId, setEventId] = useState("PyMlV5_HRWk");


    useEffect(() => {
        getEventData();
    }, [searchTerm])

 


    async function getEventData(){
        const event = axios.get(`https://serpapi.com/search.json?engine=google_events&q=Events+in+${searchTerm}&hl=en&gl=us&api_key=1fec98da54d39ec0f6ad8335622f0f645ae3c07ee12391459473dab7954373bb/`,{mode:'no-cors'})
        console.log(event.data);
        setEventdata(event.data.items);
        setEventId(event.data.items[0].id.event.id)
    }

    
    
    return(
        <div className = "app">
            {eventData &&
                <div className ="app">
                    <Eventsearch value = {setSearchTerm}/>
                    
           
                </div>
            }
        </div>
    );
}

export default Events;