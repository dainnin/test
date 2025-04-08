import { createUpdate, HashEnabled } from '/modulos/funciones/creacion.js'
import { rutas } from '/modulos/enrutador/rutas.js'
import { footer } from '/modulos/footer/footer.js';
import { header } from '/modulos/header/header.js';


HashEnabled();

 await createUpdate(
    rutas,
    {
        header,
        footer
    })
