import GoogleAPIKey from "../../data/GoogleAPIKey.json";

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
import { useEffect, useState } from "react";
import { getAllLogs } from "../config/ApiService";

const GoogleMap = () => {
    const [origin, setOrigin] = useState([{
        lat: 0,
        lng: 0,
    }]);

    const [destination, setDestination] = useState([{
        lat: 0,
        lng: 0,
    }]);


    const [logsInfo, setLogsInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setTimeout(() => {
            getAllLogs().then((data) => {
                setLogsInfo(data);
            }).catch((error) => {
                setError(error.message);
            });
        }, 1000);
    }, [])

    return (
        <APIProvider apiKey={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "70vh", width: "100%" }}>
                <Map mapId={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_ID}>
                    {logsInfo.map((log) => (
                        <Directions origin={log.order.location} destination={log.driver.location} />
                    ))}
                </Map>
            </div>
        </APIProvider>
    )
}

export default GoogleMap;