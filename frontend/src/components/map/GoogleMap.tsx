import { useState } from "react";
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
import { FaMapMarker } from "react-icons/fa";
import Directions from "./Directions";

const GoogleMap = () => {
    const position = { lat: 53.54, lng: 10 };
    const [open, setOpen] = useState(false);

    const window = (e) => {
        setOpen(e);
    }

    return (
        <APIProvider apiKey={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "70vh", width: "100%" }}>
                <Map mapId={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_ID}>
                    <AdvancedMarker onClick={e => window(e)} position={(position)}>
                        <FaMapMarker style={{ color: 'red', fontSize: '32px' }} />
                    </AdvancedMarker>
                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>This is the mark</p>
                        </InfoWindow>
                    )}
                    <Directions />
                </Map>
            </div>
        </APIProvider>
    )
}

export default GoogleMap;