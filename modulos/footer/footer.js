
import {  HTMLatObj, classOnBody } from "/test/modulos/funciones/creacion.js"


export const footer = HTMLatObj(`${(() => {

    classOnBody({ header: "flexAround", footer: "flexAround" })
    return ""
})()}
<link rel="stylesheet" href="/test/modulos/css/index.css"></link>
<link rel="stylesheet" href="https://dainnin.github.io/HTMLPubM/css/principal.css"></link>
<link rel="stylesheet" href="/test/modulos/css/App.css"></link>
<a href="/">
<img src="/test/modulos/img/logo192.png" alt="logo"/></img>
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


