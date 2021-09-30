import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './css/categorias.css';
import { getFirestore } from '../../firebase/firebase';

function Categorias() {

    const [categorias, setCategorias] = React.useState([]);

//FIREBASE
React.useEffect(() => {
    const  db = getFirestore();
    const productsCollection = db.collection('categorias');
    productsCollection
    .get()
    .then((querySnapshot) => {
        if(querySnapshot.empty){
            console.log("No hay productos")
        }else{
            const data = querySnapshot.docs.map((doc) => (doc.data()));
            setCategorias(data)
        }
    })
    .catch((error) => console.log(`Error al cargar datos de firebase: ${error.status}`))
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
            categorias.map((categorias) => {return <Dropdown.Item href={'/?categoria='+categorias.categoria}>{categorias.categoria}</Dropdown.Item>})
        }
    </Dropdown.Menu>
  </Dropdown>
  </div>
    )
}

export default Categorias
