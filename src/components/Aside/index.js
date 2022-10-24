import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ExpandLess, ExpandMore, Nature, Spa } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import DeleteModal from "../DeleteModal";



const Aside = ({ property, selectedPolygon, onSelectPolygon, map }) => {
  const zoom = 16


  const [selectedToDelete, setSelectedToDelete] = React.useState(null);
  const handleCloseModal = () => setSelectedToDelete(null);

 
  return (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItemText sx={{ p: 4 }} primary={property.name} />
        {property.polygons.map(
          ({ id, especie, cultivar, dataDePlantio, dataDeFim }, index) => (
            <div key={id}>
              <ListItemButton
                onClick={event =>  {
                  onSelectPolygon(selectedPolygon === id ? null : id);
                  map.setView(property.polygons[index].coordinates[0], zoom);
                }}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={`Polygon ${id}`} />
                {selectedPolygon === id? <ExpandLess style={{marginRight:'15px'}} /> : <ExpandMore style={{marginRight:'15px'}} />}
                <DeleteIcon onClick={()=> {
                  setSelectedToDelete(id)
                }}
                />
                 
              </ListItemButton>
              <Collapse
                in={selectedPolygon === id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Nature />
                    </ListItemIcon>
                    <ListItemText primary={`Espécie: ${especie || 'Não informada'}`} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Spa />
                    </ListItemIcon>
                    <ListItemText primary={`Cultivar: ${cultivar || 'Não informada'}`} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Data de plantio: ${dataDePlantio || 'Não informada'}`} />
                  </ListItemButton><ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <EventAvailableIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Data de fim: ${dataDeFim || 'Não informada'}`} />
                  </ListItemButton>
                </List>
              </Collapse>
              <DeleteModal 
                handleCloseModal={handleCloseModal} 
                selectedToDelete={selectedToDelete}
              />
            </div>
          )
        )}
      </List>
      <Divider />
    </Box>
  );
};

export default Aside;
