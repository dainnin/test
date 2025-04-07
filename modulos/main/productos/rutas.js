
import {HTMLatObj} from "/modulos/funciones/creacion.js"
import { fetchResReq } from '/modulos/funciones/utilidades.js';
export const FETCH = new fetchResReq({})
export const LinkProductos={
    
    "peteros": HTMLatObj(await FETCH.text('/modulos/test.html'))
}