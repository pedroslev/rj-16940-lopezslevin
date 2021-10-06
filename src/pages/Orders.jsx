import React from 'react'
import Table from 'react-bootstrap/Table'
import { getFirestore } from '../firebase/firebase';

function Orders() {

    const [order, setOrders] = React.useState([{}]);
//FIREBASE
React.useEffect(() => {
    const  db = getFirestore();
    const OrdersCollection = db.collection('orders');
    OrdersCollection
    .get()
    .then((querySnapshot) => {
        if(querySnapshot.empty){
            console.log("No hay ordenes")
        }else{
            const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
            setOrders(data);
        }
    })
    .catch((error) => console.log(`Error al cargar datos de firebase: ${error.status}`))
}, []);

    return (
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Telefono</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
    )
}

export default Orders
