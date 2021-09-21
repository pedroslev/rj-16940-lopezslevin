import React from 'react'
import Products from './Products'
import '../App.css';

function NotFound() {
    return (
        <section className="notfound">
            <div>
            <h1>Lo sentimos, la pagina que estas buscando no existe.</h1>
            </div>
            <div>
            <p>Error: 404 Not Found</p>           
            </div>
            <div>
            <p>Regresar al <a href="/">MENU</a></p>
            </div>
            
        </section>
    )
}

export default NotFound
