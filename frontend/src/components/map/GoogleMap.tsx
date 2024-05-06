import GoogleAPIKey from "../../data/GoogleAPIKey.json";
import addressData from "../../data/addressData.json"

import {
    APIProvider,
    AdvancedMarker,
    InfoWindow,
    Map,
    Marker,
    Pin,
}
    from "@vis.gl/react-google-maps"
import Directions from "./Directions";
import { useState } from "react";

const GoogleMap = () => {
    const [origin, setOrigin] = useState([{
        lat: 0,
        lng: 0,
    }]);

    const [destination, setDestination] = useState([{
        lat: 0,
        lng: 0,
    }]);

    return (
        <APIProvider apiKey={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "70vh", width: "100%" }}>
                <Map mapId={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_ID}>
                    <Directions />
                </Map>
            </div>
        </APIProvider>
    )
}

export default GoogleMap;