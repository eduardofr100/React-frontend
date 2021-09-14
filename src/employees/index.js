import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';

/*const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    roooot: {
        '& > *': {
        margin: theme.spacing(2),
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        },
    },
    boton: {
        '& > *': {
          margin: theme.spacing(1),
          fontSize: 16,
        },
    },
}));*/

const columns = [
    { 
        field: 'id', 
        headerName: 'Información personal', 
        width: 210, 
        editable: true, 
    },
    {
        field: 'infoname',
        headerName: 'Información personal',
        width: 160,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Estatus',
        width: 170,
        editable: true,
    },
    {
        field: 'products',
        headerName: 'Productos',
        width: 150,
        editable: true,
    },
    {
        field: 'balance',
        headerName: 'Saldo',
        editable: true,
        width: 170,
    },
    {
        field: 'date',
        headerName: 'Fecha de alta',
        editable: true,
        width: 170,
    },
];
  
const Empleado = () =>{
    /*const classes = useStyles();*/
    const [tableData, setTableData] = useState([]) 
    useEffect(() => {
    fetch("https://localhost:8080/employees/")
    .then((data) => data.json())
    .then((data) => setTableData(data))  
    }) 

    return(     
        <Container maxWidth="md">
            <Grid container spacing={1} style={{ marginTop: 50 }}>
                <Grid item sm={2} >
                    <Button variant="contained">Todos</Button>
                </Grid>
                <Grid item sm={2} >
                    <Button variant="contained">Activos</Button>
                </Grid>
                <Grid item sm={2} >
                    <Button variant="contained">Inactivos</Button>
                </Grid>
            </Grid>
            <div style={{ height: 425, width: '100%', marginTop: 10 }}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
            <Button style={{ height: 45, width: '33%', marginTop: 110, marginLeft: 35, fontWeight: "bolder" }} variant="contained" color="secondary">
                GUARDAR<CallMadeIcon fontSize="small"/>
            </Button>
        </Container>
    );
}
export default Empleado()