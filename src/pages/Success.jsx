import * as React from 'react'
import '../App.css';
import SuccessBag from '../media/successBag.png'
import { getFirestore } from '../firebase/firebase';


function Success() {

  const [order, setOrder] = React.useState([]);
  //FIREBASE
React.useEffect(() => {
  const  db = getFirestore();
  const ordersCollection = db.collection('orders').orderBy("date", "desc");
  ordersCollection
  .get()
  .then((querySnapshot) => {
      if(querySnapshot.empty){
          console.log("No hay ordenes")
      }else{
          const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
          setOrder(data);
          document.getElementById('paymentID').innerHTML = data[0].id
          document.getElementById('Anouncement').innerHTML = data[0].buyer.nombre + ' tu ID de compra es:'
      }
  })
  .catch((error) => console.log(`Error al cargar datos de firebase: ${error.status}`))
}, []);

  return (
    <div className="App">
        <div className="centeredSuccess">
            <h1>Se ha registrado su compra exitosamente!</h1>
            <h4 style={{fontWeight: '700'}} id="Anouncement"></h4>
            <h4  style={{fontWeight: '700'}} id="paymentID"></h4>
            <h6>Muchas gracias! :)</h6>
            <img src={SuccessBag} alt="" className="SuccessBag"/>
        </div>
    </div>
    );
  }
     
export default Success;