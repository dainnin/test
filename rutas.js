
import { LoginForm } from "/test/main/login.js";
import { HTMLatDOM, voidElement, HTMLatObj } from '/test/funciones/creacion.js'
import { $ } from '/test/funciones/utilidades.js';


 async function crearTags ({ data, load, error, element })  {
   
   voidElement(element)
     if (load) {
          element.appendChild(HTMLatDOM(`<h1>Esta cargando...</h1>`))
     } else if (error) {
         element.appendChild(HTMLatDOM(`<h1>$lol....${error}</h1>`))
     } else {
 
         data.forEach(a => {
             element.appendChild(HTMLatDOM(
                 `<div>
                     <h3>${a.nombre}</h4>
                     <h4>${a.id}</h4>
                     <h5>${a.descripcion}</h4>
                 </div>
                 <div className="content">
                 </div>
 `
             )
             )
         })
     }
 }
 Object.defineProperties(crearTags,{
     'url':{
         get:()=>'https://dainnin.alwaysdata.net/api/productos/'
     }
 })
const err404 = () => {
    
    const zzz = HTMLatObj(`
<div fetchEvent="crearTags||F">

</div>    

`)

    
    return zzz
};

$.referencias(crearTags)
export const rutas = {
    "/": HTMLatObj(`<h1 style="color:red;">Holaaa</h1>`),
    "productos":  err404() 
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
`),
    "login":LoginForm()
}
