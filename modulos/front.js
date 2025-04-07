import { createUpdate, HashEnabled } from '/test/modulos/funciones/creacion.js'
import { rutas } from '/test/modulos/enrutador/rutas.js'
import { footer } from '/test/modulos/footer/footer.js';
import { header } from '/test/modulos/header/header.js';


HashEnabled();

 await createUpdate(
    rutas,
    {
        header,
        footer
    })
