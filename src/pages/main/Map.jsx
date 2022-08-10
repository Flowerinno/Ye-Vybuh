import React from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import Test from "./Test";

const containerStyle = {
    height: "100vh",
    width: "100%",
    overflow: 'hidden',
    margin: 0
};

const center = {
    lat: 48.3794,
    lng: 31.1656
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBIoAo23DKC9Wn1JVPsXR0oh369N-i2MMc"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.setZoom(6);
        // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div style={{display: 'flex', height: '100%'}}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <Marker position={center} />
                <Test />
            </GoogleMap>

        </div>

    ) : <></>
}

export default React.memo(Map)