// import React, {useState} from "react";
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import DisplayPosition from '../DisplayPosition';
import './styles.css';


const propriedade1 = [
  [-3.7270, -38.5596],
  [-3.72635, -38.5597],
  [-3.72595, -38.5576],
  [-3.7268, -38.5575],
  [-3.7274, -38.5585]
]
const propriedade2 = [
  [-4.26109, -38.93278],
  [-4.26101, -38.9331],
  [-4.26147, -38.93322],
  [-4.26155, -38.93291]
]
const propriedade3 = [
  [-5.0728, -37.9895],
  [-5.07157, -37.98893],
  [-5.07145, -37.9900],
  [-5.07231, -37.99045]
]

const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }

function MapLeafLet() {
  const coordinatesProperty1 = [-3.7269, -38.5585]
  const coordinatesProperty2 = [-4.2614, -38.9330]
  const coordinatesProperty3 = [-5.0721, -37.9897]
  const [map, setMap] = useState(null)
  
  function teste() {
    alert('teste')
  }


  return (
    <>
      {map ? <DisplayPosition map={map} /> : null}
      <MapContainer center={coordinatesProperty1} zoom={4} scrollWheelZoom={true} ref={setMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinatesProperty1} >
          <Popup>
            <div>
              <h3>{"Propriedade 1"}</h3>
              <button onClick={teste}>DETALHES</button>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesProperty2} >
          <Popup>
            <div>
              <h3>{"Propriedade 2"}</h3>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesProperty3} >
          <Popup>
            <div>
              <h3>{"Propriedade 3"}</h3>
            </div>
          </Popup>
        </Marker>
        <Polygon eventHandlers={{
          click: () => {
            alert("marker clicked");
          }
          }} 
          pathOptions={redOptions} positions={propriedade1} />
        <Polygon eventHandlers={{
          click: () => {
            alert("marker clicked");
          }
          }} pathOptions={purpleOptions} positions={propriedade2} />
        <Polygon eventHandlers={{
          click: () => {
            alert("marker clicked");
          }
          }} pathOptions={limeOptions} positions={propriedade3} />
      </MapContainer>
    </>
  );
}
export default MapLeafLet;
