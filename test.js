import { $ } from '/test/funciones/utilidades.js';

import { HTMLatDOM, voidElement, HTMLatObj, classOnBody } from "/test/funciones/creacion.js"

import { ab, setStateCheck, setStateArr } from "/test/req/asd.js"

const crearTagsHeader = () => {

    return HTMLatObj(`
    <a href="/">
       <img src="/logo192.png" alt="logo" className="App-logo"/></img>
    </a>
    <div>
      <label>Buscar</label>
      <input type="search" value="" onChange="" /></input>
      <button> <a href="">Buscar</a></button>
    </div> 
  <div>
    <div>
     
    </div>
    <nav>
        <ul className="menu" id="menuHeader" fetchAUTO="fetchHeader||F">
          
        </ul>
    </nav>
   
  </div>
     
  `)

}

async function fetchHeader() {
    const element = this || document.getElementById('menuHeader')
    let qwe = false

    if (!qwe && element !== undefined) {
        setStateArr.forEach(a => {

            element instanceof Element && a === element.fetchAUTO ? qwe = true : ''
        });
        setStateCheck(element.fetchAUTO)
    }

    async function logout() {
        const req = new $.test({});
        req.fetchE([
            "https://dainnin.alwaysdata.net/api/logout",
            {
                "headers": {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'

                },
                mode: 'cors',
                credentials: "include",
            }
        ]);
        ab.fetchR

    }
    $.referencias(logout);
    voidElement(element);
    // console.log(`Elemento conectado al DOM:`, target);
    element.appendChild(
        HTMLatDOM(`
                    <li data-key="1"><a href="/productos">Productos</a></li>
                    <li key="4"><a href="/login">Iniciar Sesion</a></li>
                    <li><a href="/registro">Unirte</a></li>
                `)
    );
    const { url, opciones } = ab.static

    await fetch(url, opciones).then(a => a.json())
        .then((a) => {
            alert(a)
           alert(String(a)) 
            $.path==='/login'?location.hash='/':''
            voidElement(element);
            element.appendChild(
                HTMLatDOM(`
            <li data-key="1"><a href="/productos">Productos</a></li>
            <li key="3"><a href="/profile">Perfil</a></li>
            <li><a href="/settings">Configuración</a></li>
            <li><a href="/" onclick="logout||F">Cerrar sesión</a></li>
        `)
            );
        }).catch(()=>{})

}

// Función para actualizar el DOM con lógica dinámica

$.referencias(fetchHeader)



export const header = crearTagsHeader();
export const footer = HTMLatObj(`${(() => {

    classOnBody({ header: "flexAround", footer: "flexAround" })
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


