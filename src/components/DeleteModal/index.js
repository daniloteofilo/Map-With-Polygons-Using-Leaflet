import { Box, Modal } from "@mui/material";


const DeleteModal = ({selectedToDelete, handleCloseModal}) => {
    const deletePolygon = () => {
        fetch(`https://63529cd6a9f3f34c3744245d.mockapi.io/properties/1/poligonos/${selectedToDelete}`, { method: 'DELETE' })
                .then(() => this.setState({ status: 'Delete successful' }));
    }

    return (
        <Modal
            open={selectedToDelete}
            onClose={undefined}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='styleModal' >
            <h3>Deseja realmente deletar o poligono {selectedToDelete}?</h3>
            <div>
                <button onClick={() => {
                    deletePolygon()
                    handleCloseModal()
                }} 
                >
                    Deletar
                </button>
                <button onClick={handleCloseModal}>Cancelar</button>
            </div>
            </Box>
        </Modal>
    )
}

export default DeleteModal;