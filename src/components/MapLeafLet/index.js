// import React, {useState} from "react";
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';


function LeafLet() {
  const [activePark, setActivePark] = useState(null);
  return (
    <MapContainer center={[-3.7327, -38.5270]} zoom={12}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-3.7327, -38.5270]} />
      {activePark && (
    <Popup
      position={[
        activePark.geometry.coordinates[1],
        activePark.geometry.coordinates[0]
      ]}
      onClose={() => {
        setActivePark(null);
      }}
    >
      <div>
        <h2>{activePark.properties.NAME}</h2>
        <p>{activePark.properties.DESCRIPTIO}</p>
      </div>
    </Popup>
  )}
    </MapContainer>
  );
}

export default LeafLet;
