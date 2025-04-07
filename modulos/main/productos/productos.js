import { HTMLatDOM, voidElement, HTMLatObj } from "test/modulos/funciones/creacion.js"
import { $ } from 'test/modulos/funciones/utilidades.js';


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
export const productos = () => {
    
    return HTMLatObj(`
<div fetchEvent="crearTags||F">

</div>    

`)

};

$.referencias(crearTags)
