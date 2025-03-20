
import { createUpdate, HashEnabled } from '/modulos/funciones/creacion.js'
import { rutas } from '/rutas.js'
import { header, footer } from '/test.js';

HashEnabled();

 await createUpdate(
    rutas,
    {
        header,
        footer
    })
