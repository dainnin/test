
import {   FPathAr, HTMLatDOM, voidElement, HTMLatObj } from "/test/funciones/creacion.js"

const FPathArr = FPathAr;
const crearTags = ({ data, load, error, element }) => {
    voidElement(element)
    if (load) {

        element.appendChild(HTMLatDOM(`<h1>Esta cargando...</h1>`))
    } else if (error) {
        element.appendChild(HTMLatDOM(`<h1>${error}</h1>`))
    } else {

        data.forEach(a => {
            element.appendChild(HTMLatDOM(
                `<div>
                    <h3>${a.nombre}</h4>
                    <h4>${a.id}</h4>
                    <h5>${a.descripcion}</h4>
                       
                </div>
                <div id="content">


</div>
`
            )
            )
        })
    }
}


const err404 = () => {
    const tagMulti = [
        "https://dainnin.alwaysdata.net/api/productos/",
        crearTags
    ]

    const zzz = HTMLatObj(`
<h1 id="asd"  fetchEvent="tagMulti">

</h1>    
`)
    FPathArr(zzz, "fetchEvent", "tagMulti", { "fetchEvent": tagMulti })
    return zzz
}

    ;


export const rutas = {
    "/": HTMLatObj(`<h1 style="color:red;">Holaaa</h1>`),
    "productos": [{ div: { children: err404() } }]
    ,
  
    
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
`)
}
