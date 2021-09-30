//fetch con json-server
React.useEffect(() => {
        const url = "http://localhost:3001/products";
        fetch(url)
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw response;
            }
        })
        .then((items) => setItems(items))
        .then(()=>{
        let url = window.location.href;
        let params = (new URL(url)).searchParams;
        let categoria = params.get('categoria')
        setCategoria(categoria)
        })
        .catch((error) => console.log(`Error al cargar datos de json-db: ${error.status}`))
    }, []); 