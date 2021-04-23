import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
// 🤢🤢🌚
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_BASE_MAP;

const Map = ({ address }) => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(13.404954);
  const [lat, setLat] = useState(52.520008);
  const [zoom, setZoom] = useState(9);

  const addressString = `${address.streetName} ${address.streetNumber},
                 ${address.postalCode} ${address.city},
                 ${address.country}`;

  useEffect(() => {
    const tryIt = async () => {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressString}.json?access_token=${process.env.REACT_APP_BASE_MAP}`;
      const result = await axios.get(url);
      // console.log(result.data.features[0].center)
      setLng(result.data.features[0].center[0]);
      setLat(result.data.features[0].center[1]);

    };
    tryIt();
  }, [addressString]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/diverman/ckmxmpj770ywq17o3utyrki1u",
      center: [lng, lat],
      zoom: zoom,
      pitch: 70,
      bearing: 30,
    });
    let marker1 = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    map.addControl(new mapboxgl.FullscreenControl());
    return () => map.remove();
  }, [lat, lng, zoom]);

  return (
    <div>
      {lng && lng && (
        <div className="mt-2"  style={{ height: "9rem", width: "15rem" }} ref={mapContainer} />
      )}
    </div>
  );
};

export default Map;
