import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './css/categorias.css';

function Categorias() {

    const [categorias, setCategorias] = React.useState([]);

    React.useEffect(() => {
        const urldb = "http://localhost:3001/categorias/";
        fetch(urldb)
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw response;
            }
        })
        .then((categorias) => setCategorias(categorias))
        .catch((error) => console.log(`Error al cargar datos de json-db: ${error.status}`))
    }, []);

    return (
    <div className="categorias">
    <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
    Categorias
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item href="/" >Todo</Dropdown.Item>
        {   
            categorias.map((categorias) => {return <Dropdown.Item href={'/?categoria='+categorias}>{categorias}</Dropdown.Item>})
        }
    </Dropdown.Menu>
  </Dropdown>
  </div>
    )
}

export default Categorias
