import GoogleAPIKey from "../../data/GoogleAPIKey.json";

import {
    APIProvider,
    Map,
}
    from "@vis.gl/react-google-maps"
import Directions from "./Directions";
import { useEffect, useState } from "react";
import { getAllLogs, getLogsBasedOnDriver } from "../config/ApiService";

const GoogleMap = ({ userEmail }) => {
    const [logsInfo, setLogsInfo] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            if (userEmail !== null) {
                getLogsBasedOnDriver(userEmail).then((data) => {
                    setLogsInfo(data);
                }).catch((error) => {
                    console.log(error.message);
                });
            } else {
                getAllLogs().then((data) => {
                    setLogsInfo(data);
                }).catch((error) => {
                    console.log(error.message);
                });
            }
        }, 1000);
    }, [userEmail])

    console.log(userEmail)
    return (
        <APIProvider apiKey={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "70vh", width: "100%" }}>
                <Map defaultZoom={9} mapId={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_ID}>
                    {logsInfo && logsInfo.map && logsInfo.map((log) => (
                        <Directions key={log.id} origin={log.order.location} destination={log.driver.location} />
                    ))}
                </Map>
            </div>
        </APIProvider>
    )
}

export default GoogleMap;