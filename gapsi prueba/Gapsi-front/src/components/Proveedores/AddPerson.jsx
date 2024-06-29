import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Call, Message } from "@mui/icons-material";
import { InputAdornment, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: "2px 2px 2px #000",
    p: 4,
};
F

    export default BasicModal = (props) => {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.proveedor.nombre}
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Message /></InputAdornment>, value: props.proveedor.razon_social  }} style={{ width: "100%", textAlign: "center" }}>

                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Call /></InputAdornment>, value: props.proveedor.direccion }} style={{ width: "100%", textAlign: "center" }}>
                        </TextField>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}