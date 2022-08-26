import React from "react";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import Modal from "./Modal";

const containerStyle = {
	height: "100vh",
	width: "100%",
	overflow: "hidden",
	margin: 0,
};

const ukraine = {
	lat: 48.3794,
	lng: 31.1656,
};

function Map(props) {
	const {isLoaded} = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBIoAo23DKC9Wn1JVPsXR0oh369N-i2MMc",
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(ukraine);
		map.setZoom(6);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);
	const image = "http://maps.google.com/mapfiles/kml/shapes/man.png";
	const dangerimage = "http://maps.google.com/mapfiles/kml/shapes/caution.png";
	return isLoaded ? (
		<div style={{display: "flex", height: "100%"}}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={ukraine}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<Marker position={{lat: props.lat, lng: props.lng}} icon={image} />
				<Marker position={{lat: 50.0, lng: 36.2292}} icon={image} />
				<Marker position={{lat: 46.4775, lng: 30.7326}} icon={image} />
				<Modal />
			</GoogleMap>
		</div>
	) : (
		<></>
	);
}

export default React.memo(Map);
