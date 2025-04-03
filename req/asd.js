import { $, proxyFlex, parseHTML, voidThis, fetchResReq } from '/test/funciones/utilidades.js';

 const abc = new fetchResReq({ setGlobal: true });
abc.setStatic(["https://dainnin.alwaysdata.net/api/checkToken", {
  method: 'GET',
  credentials: 'include', // Asegura que las cookies se envíen
  headers: {
    'Content-Type': 'application/json',
  },
  "mode": "cors"
}])



 const abcPorxy = proxyFlex(abc,'fetchR');

 export const ab = abcPorxy.proxy
 export const setStateCheck=abcPorxy.suscribir

 export const setStateArr = abcPorxy.suscriptores
