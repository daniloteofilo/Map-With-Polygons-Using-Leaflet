import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import DisplayPosition from "../DisplayPosition";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./styles.css";
import data from "../../dataBackEnd/PropertiesList.json";
import Aside from "../Aside";
import { ArrowForward } from "@mui/icons-material";

const blueOptions = { color: "blue" };
const redOptions = { color: "red" };

function MapLeafLet() {
  const propriedade = data[0];
  const initialCoordinates = [-3.7269, -38.5585];
  const [map, setMap] = useState(null);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {map ? <DisplayPosition map={map} /> : null}
      <div style={{display:'flex', justifyContent:'end'}}>
        <button onClick={() => setOpen(true)}>Lista de propriedades</button>
      </div>
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
