import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./styles.css";
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const styleInputModal = {
  padding:'5px',
  marginBottom:'10px',
  borderRadius:'10px',
  minWidth:'40%',
  marginRight:'15px',
  border:'1px solid gray'
}

function RegisterPolygon() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const dataDeInicio = React.useRef();
	const dataDeFim = React.useRef();


  const [loading, setLoading] = React.useState(false);

  function sendForm(event){
    event.preventDefault()
    let formulario = new FormData(event.target);
    let sendData ={
      'especie': formulario.get('especie'),
      'cultivar': formulario.get('cultivar'),
      'dataDePlantio': formulario.get('dataDePlantio'),
      'dataDeFim': formulario.get('dataDeFim'),
      'coordinates': [
        [formulario.get('latitude1'), formulario.get('longitude1')],
        [formulario.get('latitude2'), formulario.get('longitude2')],
        [formulario.get('latitude3'), formulario.get('longitude3')],
        [formulario.get('latitude4'), formulario.get('longitude4')]
      ]
    }
    console.log(JSON.stringify(sendData));
    setLoading(true)
    fetch('https://63529cd6a9f3f34c3744245d.mockapi.io/properties/1/poligonos', {
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(sendData)
    })
    .then((response) => response.json())
    .then((data) => {
      setLoading(false)
      handleCloseModal() ;
    })
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Cadastrar Poligono</button>
      <Modal
        open={openModal}
        onClose={undefined}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='styleModal' >
          <h3>Dados do poligono</h3>
          <form
            onSubmit={sendForm} 
            style={{
              display:'flex',
              justifyContent:'center',
              width:'100%',
              marginBottom:'20px',
              textAlign:'center',
            }}
          >
            <div style={{fontSize:'15px'}}>
              <div>
                <p>Espécie/Cultivar</p>
                <input name='especie' type='text' style={styleInputModal} placeholder='Espécie'></input>
                <input name='cultivar' type='text' style={styleInputModal} placeholder='Cultivar'></input>
              </div>
              <div>
                <p>Datas de Plantio e de colheita</p>
                <input
                  name='dataDeInicio'
                  style={styleInputModal}
                  type="text"
                  ref={dataDeInicio}
                  placeholder="Data de Plantio"
                  onFocus={() => (dataDeInicio.current.type = "date")}
                  onBlur={() =>
                    dataDeInicio.current.value !== ""
                      ? (dataDeInicio.current.type = "date")
                      : (dataDeInicio.current.type = "text")
                  }
                />
                <input
                  name='dataDeFim'
                  style={styleInputModal}
                  type="text"
                  ref={dataDeFim}
                  placeholder="Data de Colheita"
                  onFocus={() => (dataDeFim.current.type = "date")}
                  onBlur={() =>
                    dataDeFim.current.value !== ""
                      ? (dataDeFim.current.type = "date")
                      : (dataDeFim.current.type = "text")
                  }
                />
              </div>
              <div>
                <div>
                  <p>Coordenada 1</p>
                  <input name='latitude1' type='text' style={styleInputModal} placeholder='Latitude'></input>
                  <input name='longitude1' type='text' style={styleInputModal} placeholder='Longitude'></input>
                </div>
                <div>
                  <p>Coordenada 2</p>
                  <input name='latitude2' type='text' style={styleInputModal} placeholder='Latitude'></input>
                  <input name='longitude2' type='text' style={styleInputModal} placeholder='Longitude'></input>
                </div>
                <div>
                  <p>Coordenada 3</p>
                  <input name='latitude3' type='text' style={styleInputModal} placeholder='Latitude'></input>
                  <input name='longitude3' type='text' style={styleInputModal} placeholder='Longitude'></input>
                </div>
                <div>
                  <p>Coordenada 4</p>
                  <input name='latitude4' type='text' style={styleInputModal} placeholder='Latitude'></input>
                  <input name='longitude4' type='text' style={styleInputModal} placeholder='Longitude'></input>
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'space-around'}}>
                <LoadingButton 
                  size='small'
                  color='secondary'
                  type='submit'
                  loading={loading}
                  loadingPosition='start'
                  startIcon={<SaveIcon />}
                  variant='contained'
                >
                  Salvar poligono
                </LoadingButton>
                <Button onClick={handleCloseModal} variant="outlined" startIcon={<DeleteIcon />}>
                  Cancelar
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default RegisterPolygon;
