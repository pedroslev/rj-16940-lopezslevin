import '../App.css';
import SuccessBag from '../media/successBag.png'


function Success() {
  return (
    <div className="App">
        <div className="centeredSuccess">
            <h1>Se ha registrado su compra exitosamente!</h1>
            <h6>Muchas gracias! :)</h6>
            <img src={SuccessBag} alt="" className="SuccessBag"/>
        </div>
    </div>
    );
  }
    
export default Success;