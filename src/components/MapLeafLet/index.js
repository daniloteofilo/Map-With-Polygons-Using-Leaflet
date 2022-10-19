// import React, {useState} from "react";
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DisplayPosition from '../DisplayPosition';
import './styles.css';

function MapLeafLet() {
  const coordinatesFortaleza = [-3.7327, -38.5270]
  const coordinatesGuaramiranga = [-4.2618, -38.9331]
  const coordinatesQuixere = [-5.0728, -37.9895]
  const coordinatesParnaiba = [-2.9096, -41.7537]
  const coordinatesFrance = [48.8566, 2.3522]
  const coordinatesAngersFr = [47.473614, -0.554167]
  const [map, setMap] = useState(null)

  return (
    <>
      {map ? <DisplayPosition map={map} /> : null}
      <MapContainer center={coordinatesFortaleza} zoom={4} scrollWheelZoom={true} ref={setMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinatesFortaleza} >
          <Popup>
            <div>
              <h3>{"Fortaleza,CE"}</h3>
              <p>{"Sou nascido e criado nessa terrinha maravilhosa"}</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesFrance} >
          <Popup>
            <div>
              <h3>{"Paris, FR"}</h3>
              <p>{"Uma cidade linda em 360º, com uma arquitetura inesquecível, uma das melhores experiências da minha vida."}</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesAngersFr} >
          <Popup>
            <div>
              <h3>{"Angers, FR"}</h3>
              <p>{"Uma pequena cidade no interior da França, cheia de belezas naturais e históricas.La tive a oportunidade conhecer uma das maiores escolas de agronomia da frança"}</p>
              <a href='https://www.groupe-esa.com/en/' target='blank'>{'École Supérieure des Agricultures Angers Loire'}</a>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesGuaramiranga} >
          <Popup>
            <div>
              <h3>{"Guaramiranga, CE"}</h3>
              <p>{"Um paraíso frio no meio do Ceará, guaramiranga é uma cidade serrana cercada de belezas naturais e com um clima bem atípico para regiões do semi-árido, com temperaturas minimas que podem chegar a 10ºC."}</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesQuixere} >
          <Popup>
            <div>
              <h3>{"Quixeré, CE"}</h3>
              <p>{"Cidade do nascimento da minha mãe e palco para muitas férias da minha infância."}</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={coordinatesParnaiba} >
          <Popup>
            <div>
              <h3>{"Parnaíba, PI"}</h3>
              <p>{"Belas praias, cidade animada, mas com uma característica peculiar: -Um sol para cada habitante. Ow lugarzinho quente!"}</p>
            </div>
          </Popup>
        </Marker>
        
      </MapContainer>
    </>
  );
}
export default MapLeafLet;
