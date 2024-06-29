import React from 'react';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import { RemoveRedEye } from '@mui/icons-material';
import { ButtonGroup, IconButton, Button } from '@mui/material';


 const DataTable = (props) => {
    const columns = [
        {
            name: "id_proveedor",
            label: "Id",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "nombre",
            label: "Nombre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "razon_social",
            label: "Razon Social",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "direccion",
            label: "Direccion",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "actions",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <ButtonGroup>
                            <IconButton onClick={() => props.handleOpen(tableMeta.rowData[0])}>
                                <RemoveRedEye />
                            </IconButton>
                            <IconButton onClick={() => props.handleEditOpen(tableMeta.rowData[0])}>
                                <EditIcon />
                            </IconButton>
                        </ButtonGroup>
                    );
                }
            }

        },
    ];
    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (event, item) => {
            const me = item.map((set) => {
                return props.mydata[set.index].id;
            })
            console.log(me);
        },
        customToolbar: () => {
            return (<Button variant="contained" color="primary" onClick={() => props.handleEditOpen(0)}>agregar PROVEEDOR</Button>)
        },
        onRowsDelete: (rowsDeleted, data) => {
            const toDelete = rowsDeleted.data.map((row) => row.dataIndex);
            props.handleDelete(toDelete);
            console.log(rowsDeleted);

        }
    };
    return (
        <MUIDataTable
            title={"PROVEEDORES"}
            data={props.mydata}
            columns={columns}
            options={options}

        />)
}

export default DataTable;