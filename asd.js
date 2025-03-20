
import { createUpdate, HashEnabled } from '/test/funciones/creacion.js'
import { rutas } from '/rutas.js'
import { header, footer } from '/test.js';

HashEnabled();

 await createUpdate(
    rutas,
    {
        header,
        footer
    })
