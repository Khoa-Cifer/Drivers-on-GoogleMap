import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const Directions = () => {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    useEffect(() => {
        if (!routesLibrary || !map) {
            return;
        }
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer) {
            return;
        }
        directionsService.route({
            origin: "100 Front St, Toronto ON",
            destination: "500 College St, Toronto ON",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response => {
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        })
    }, [directionsService, directionsRenderer]);
    if (!leg) {
        return null;
    }

    console.log(selected.summary);
    console.log(leg.start_address);
    console.log(leg.start_location);
    console.log(leg.distance?.text);
    console.log(leg.duration?.text);
    console.log(routes.map((route, index) => (
        <li key={route.summary}>
            {route.summary}
        </li>
    )))

    return (
        <div className="directions">
            <h2>{selected.summary}</h2>
            <h2>{leg.start_address} to {leg.end_address}</h2>
            <p></p>
        </div>
    );
}

export default Directions;