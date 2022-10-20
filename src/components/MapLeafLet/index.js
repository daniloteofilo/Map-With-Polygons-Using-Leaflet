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
import data from '../../dataBackEnd/PropertiesList.json'


console.log(console.log(data[0].polygons[0].coordinates));

const propriedade1 = data[0].polygons[0].coordinates
const propriedade2 = data[1].polygons[0].coordinates
const propriedade3 = data[2].polygons[0].coordinates

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



  // DROPDOWN DO ASIDE MENU COM INFORMAÇÕES
  // const [openDetailsPolygon1, setOpenDetailsPolygon1] = React.useState(false);
  // const handleClickPolygon1 = () => {
  //   setOpenDetailsPolygon1(!openDetailsPolygon1);
  // };
  // const [openDetailsPolygon2, setOpenDetailsPolygon2] = React.useState(false);
  // const handleClickPolygon2 = () => {
  //   setOpenDetailsPolygon2(!openDetailsPolygon2);
  // };
  // FIM
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemText sx={{p:4, mb:'40px'}} primary={'teste'} />
        <ListItemButton onClick={handleClickPolygon1}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'teste'} />
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
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
      <div>
      </div>
    </>
  );
}
export default MapLeafLet;
