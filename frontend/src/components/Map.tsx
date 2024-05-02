import { GoogleMap } from "@react-google-maps/api";

const Map = (props) => {
    const { isLoaded } = props;
    const containerStyle = {

        width: '100vw',
        height: '100vh'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return isLoaded && (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            </GoogleMap>
        </>
    )
};

export default Map;