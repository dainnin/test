
import {  HTMLatObj,classOnBody } from "/modulos/funciones/creacion.js"



export const header = HTMLatObj(`
      <a href="/"><img src="/logo192.png" alt="logo" className="App-logo"/></img></a>
      <div>
        <label>Buscar</label>
        <input type="search" value="" onChange="" /></input>
        <button> <a href="">Buscar</a></button>
      </div> 
    <div>
      <div>
        <img src="" alt="" /></img>
        <h1>????</h1>
        <p>????</p>
      </div>
     <nav>
          <ul className="menu">
            <li><a href="/productos">Productos</a></li>
            
              <li><a href="/login">Iniciar Sesion</a></li>
              <li><a href="/registro">Unirte</a></li>
             
              
              <li><a href="/profile">Perfil</a></li>
              <li><a href="/settings">Configuración</a></li>
              <li><a href="/" onClick="">Cerrar sesión</a></li>
              
          </ul>
        </nav>
     
      
    </div>
       
    `);
export const footer = HTMLatObj(`${(()=>{
    
    classOnBody({header:"flexAround",footer:"flexAround"})
    return ""
})()}
<link rel="stylesheet" href="/modulos/css/index.css"></link>
<link rel="stylesheet" href="https://dainnin.github.io/HTMLPubM/css/principal.css"></link>
<link rel="stylesheet" href="/modulos/css/App.css"></link>
<a href="/"><img src="/logo192.png" alt="logo"/></img></a>
<nav>
    <ul className="menu">
        <li><a href="/contacto">Contactanos</a></li>
        <li><a href="/help">Ayuda</a></li>
        <li><a href="/Weare">Sobre nosotros</a></li>
    <li><a href="/location">Ubicación</a></li>
    </ul>
</nav>

`)
console.log(footer)

