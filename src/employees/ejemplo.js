import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';
import {Edit, Delete} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
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
}));

const columns = [
  /*{ 
    field: 'id', 
    headerName: 'ID', 
    width: 100, 
    editable: true, 
  },*/
  {
    field: 'infoname',
    headerName: 'Información personal',
    width: 210,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Estatus',
    width: 140,
    editable: true,
  },
  {
    field: 'products',
    headerName: 'Productos',
    width: 150,
    editable: true,
    align: 'center',
  },
  {
    field: 'balance',
    headerName: 'Saldo',
    editable: true,
    width: 140,
    align: 'center',
  },
  {
    field: 'date',
    headerName: 'Fecha de alta',
    editable: true,
    width: 170,
    type: 'number',
  },
  {    
    field: 'option',
    headerName: ':',
    fontWeight: "bolder",  
    editable: true,
    width: 100,
    /*<Edit className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Editar')}/>
    &nbsp;&nbsp;&nbsp;
    <Delete  className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Eliminar')}/>*/
  },
];


const DataTable = () => {
    const classes = useStyles();
    const [tableData, setTableData] = useState([])
    useEffect(() => {
    fetch("http://localhost:8080/employees/")
    .then((data) => data.json())
    .then((data) => setTableData(data))
  })

  return (
    <Container maxWidth="md">
      <Grid container spacing={1} style={{ marginTop: 50 }}>
        <Grid item sm={2} className={classes.roooot}>
          <Button variant="contained">Todos</Button>
        </Grid>
        <Grid item sm={2} className={classes.roooot}>
          <Button variant="contained">Activos</Button>
        </Grid>
        <Grid item sm={2} className={classes.roooot}>
          <Button variant="contained">Inactivos</Button>
        </Grid>
      </Grid>
      <div style={{height: 450, width: '100%', }}>
        <DataGrid 
          rows={tableData}
          columns={columns}
          //labelRowsPerPage='Usuarios por página:'
          rowsPerPageOptions={[10, 25, 50, 100]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <Button style={{ height: 45, width: '33%', marginTop: 110, marginLeft: 35, fontWeight: "bolder" }} className={classes.boton} variant="contained" color="secondary">
        GUARDAR<CallMadeIcon fontSize="small"/>
      </Button>
    </Container>
  )
}

export default DataTable