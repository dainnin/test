
import { createUpdate, HashEnabled } from '/test/funciones/creacion.js'
import { rutas } from '/test/rutas.js'
import { header, footer } from '/test/test.js';

HashEnabled();

 await createUpdate(
    rutas,
    {
        header,
        footer
    })
