
import {  HTMLatObj, classOnBody } from "/modulos/funciones/creacion.js"


export const footer = HTMLatObj(`${(() => {

    classOnBody({ header: "flexAround", footer: "flexAround" })
    return ""
})()}
<link rel="stylesheet" href="/modulos/css/index.css"></link>
<link rel="stylesheet" href="https://dainnin.github.io/HTMLPubM/css/principal.css"></link>
<link rel="stylesheet" href="/modulos/css/App.css"></link>
<a href="/">
<img src="/modulos/img/logo192.png" alt="logo"/></img>
</a>
<nav>
    <ul className="menu">
        <li><a href="/contacto">Contactanos</a></li>
        <li><a href="/help">Ayuda</a></li>
        <li><a href="/Weare">Sobre nosotros</a></li>
    <li><a href="/location">Ubicación</a></li>
    </ul>
</nav>

`)


