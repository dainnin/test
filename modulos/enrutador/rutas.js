

import { HTMLatObj } from "/test/modulos/funciones/creacion.js"


export const rutas = {
    "/": HTMLatObj(`<h1 style="color:red;">Holaaa</h1>`),

    "productos": {
        componente: 'productos',
        urlModulo: '/test/modulos/main/productos/productos.js',
    },

    "404": HTMLatObj(
        `<div>
       <h1 className="titulo"><a href="/" >Inicio </a></h1>
       <hr></hr>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe. Por favor, verifica la URL e intenta nuevamente.</p>
    </div>
`),
    "1": HTMLatObj(
        `<div>  
       
            <h3>otro test ;)</h4>
            <h4>$Son todos pruebas y no de embarazo</h4>
            <h5>asdasdas</h4>
               
        </div>
`),
    "login": {
        componente: 'LoginForm',
        urlModulo: '/test/modulos/main/login.js'
    },
}
