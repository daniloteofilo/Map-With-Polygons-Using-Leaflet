import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import DisplayPosition from "../DisplayPosition";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./styles.css";
import Aside from "../Aside";
import { ArrowForward } from "@mui/icons-material";
import RegisterPolygon from "../RegisterPolygon";

const blueOptions = { color: "blue" };
const redOptions = { color: "red" };

function MapLeafLet() {
  const initialCoordinates = [-3.7269, -38.5585];
  const [map, setMap] = useState(null);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const [open, setOpen] = React.useState(false);

  const urlApi = 'https://63529cd6a9f3f34c3744245d.mockapi.io/properties'
  const [dataApi, setDataApi] = useState(null);
  
  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((json) => setDataApi(json));
  }, []);
  
  if (!dataApi) {
    return null;
  }

  const propriedade = dataApi[0];


  return (
    <>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <RegisterPolygon />
        <div style={{display:'flex', justifyContent:'end'}}>
          <button onClick={() => setOpen(true)}>Lista de propriedades</button>
        </div>
      </div>
     
      {map ? <DisplayPosition map={map} /> : null}
      
      <MapContainer
        center={initialCoordinates}
        zoom={8}
        scrollWheelZoom={true}
        ref={setMap}
        >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {propriedade.polygons.map(({ id, coordinates }) => (
          <Polygon
            key={id}
            eventHandlers={{
              click: () => {
                setSelectedPolygon(id);
                setOpen(true)
              },
            }}
            pathOptions={id === selectedPolygon ? redOptions : blueOptions}
            positions={coordinates}
          />
        ))}
      </MapContainer>
      <SwipeableDrawer
        variant="persistent"
        anchor="right"
        open={open}
        onOpen={() => {}}
        onClose={() => setOpen(false)}
        >
        <button onClick={() => setOpen(false)} >
          <ArrowForward />
        </button>
        <Aside
          map={map}
          property={propriedade}
          selectedPolygon={selectedPolygon}
          onSelectPolygon={(id) => setSelectedPolygon(id)}
          />
      </SwipeableDrawer>
    </>
  );
}

export default MapLeafLet;
