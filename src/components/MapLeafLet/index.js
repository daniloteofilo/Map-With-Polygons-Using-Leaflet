import { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import DisplayPosition from '../DisplayPosition';
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import './styles.css';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Collapse } from '@mui/material';

const propriedadeDetails = [{
    nome: 'Propriedade1',
    poligono: 'Poligono1',
    especie: 'Uva',
    cultivar: 'Bordô',
    dataPlantio: '17/05/2022',
    dataDeFim: 'Não informada'
  }, {
    nome: 'Propriedade2',
    poligono: 'Poligono2',
    especie: 'Banana',
    cultivar: 'Maçã',
    dataPlantio: '19/05/2022',
    dataDeFim: 'Não informada'
  }, {
    nome: 'Propriedade3',
    poligono: 'Poligono3',
    especie: 'Manga',
    cultivar: 'Rosa',
    dataPlantio: '17/05/2022',
    dataDeFim: 'Não informada'
  }]


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

const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }

function MapLeafLet() {
  const coordinatesProperty1 = [-3.7269, -38.5585]
  
  const [map, setMap] = useState(null)
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  function openRightMenu(){
    setState({
      top: false,
      left: false,
      bottom: false,
      right: true,
    });
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };




  const [openDetailsPolygon1, setOpenDetailsPolygon1] = React.useState(false);
  const handleClickPolygon1 = () => {
    setOpenDetailsPolygon1(!openDetailsPolygon1);
  };
  const [openDetailsPolygon2, setOpenDetailsPolygon2] = React.useState(false);
  const handleClickPolygon2 = () => {
    setOpenDetailsPolygon2(!openDetailsPolygon2);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemText sx={{p:4, mb:'40px'}} primary={propriedadeDetails[0].nome} />
        <ListItemButton onClick={handleClickPolygon1}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={propriedadeDetails[0].poligono} />
          {openDetailsPolygon1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openDetailsPolygon1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
      <ListItemButton onClick={handleClickPolygon2}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="TESTE" />
          {openDetailsPolygon2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openDetailsPolygon2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  



  return (
    <>
      {map ? <DisplayPosition map={map} /> : null}
      <MapContainer center={coordinatesProperty1} zoom={4} scrollWheelZoom={true} ref={setMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Polygon eventHandlers={{
          click: () => {
            openRightMenu()
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
      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
export default MapLeafLet;
