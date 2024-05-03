import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = (props) => {
    const { isLoaded } = props;
    const containerStyle = {

        width: '100vw',
        height: '100vh'
    };

    const markers = [
        {
            name: "center",
            location: {
                lat: 0,
                lng: 0
            }
        },
        {
            name: "location-1",
            status: "parked",
            location: {
                lat: 30,
                lng: 30
            }
        },
        {
            name: "location-2",
            location: {
                lat: 40,
                lng: 40
            }
        },
        {
            name: "location-3",
            location: {
                lat: 50,
                lng: 50
            }
        },
        {
            name: "location-4",
            location: {
                lat: 70,
                lng: 70
            }
        },
        {
            name: "location-5",
            location: {
                lat: 1,
                lng: 1
            }
        }
    ]

    return isLoaded && (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={markers[0].location}
                zoom={10}
            >
                {markers.map((marker) => (
                    <div key={marker.name}>
                        <Marker position={marker.location}/>
                    </div>
                ))}
            </GoogleMap>
        </>
    )
};

export default Map;