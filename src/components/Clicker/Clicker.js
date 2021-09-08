
function Clicker() {
    const [contador, setContador] = React.useState(0);

    const SumarClick = () => {
      setContador(contador + 1);
    };
  
    return (
      <div>
        <p>Clicks : {contador}</p>
        <button onClick={SumarClick}>Contar</button>
      </div>
    )
}

export default Clicker

