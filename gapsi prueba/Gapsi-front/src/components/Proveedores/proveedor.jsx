import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Call, Message, AccountCircle } from "@mui/icons-material";
import { Button, InputAdornment, TextField, ButtonGroup, Stack } from '@mui/material';
import api from "../../Services/data"

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


   const BasicModal = (props) => {
    const [formData, setFormData] = useState({});
    useEffect(() => {
        setTimeout(async () => {
            if (props.proveedor !== 0) {
                api.getOne(props.proveedor)
                    .then((found) => {
                        setFormData({ ...found });
                        console.log(found);
                    })
            } else {
                setFormData({ name: "", contact: "", email: "", id: 0 });
            }
        }, 1000);
    }, [props.proveedor])

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Stack component={"form"} sx={style} method={props.method} action='/' onSubmit={(event) => {
                    event.preventDefault();
                }} className='form' direction="column" spacing={2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment>, readOnly: props.status }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => {
                            setFormData({ ...formData, nombre: e.target.value })
                        }} required value={formData.nombre} label="Nombre">
                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Message /></InputAdornment>, readOnly: props.status }} style={{ width: "100%" }} onChange={(e) => { setFormData({ ...formData, razon_social: e.target.value }) }} required value={formData.razon_social} type='text' label="Razon Social">
                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Call /></InputAdornment>, readOnly: props.status }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => { setFormData({ ...formData, direccion: e.target.value }) }} required value={formData.direccion} label="Direccion">
                        </TextField>
                    </Typography>
                    <ButtonGroup>
                        {(props.method !== "") &&
                            <Button type='submit' color="success" variant='outlined' onClick={(event) => {
                                event.preventDefault();
                                props.handleSubmit(props.proveedor, formData);
                                setFormData({});
                            }}>Submit</Button>
                        }

                    </ButtonGroup>
                </Stack>
            </Modal>
        </div >
    );
}
export default BasicModal;