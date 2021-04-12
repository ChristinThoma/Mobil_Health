import React, { useRef, useState, useEffect } from "react";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
// 🤢🤢
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_BASE_MAP;

const Map = () => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(13.404954);
  const [lat, setLat] = useState(52.520008);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/diverman/ckmxmpj770ywq17o3utyrki1u",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

  return (
    <div>
      <div style={{ height: "6rem", width: "9rem" }} ref={mapContainer} />
    </div>
  );
};

export default Map;
