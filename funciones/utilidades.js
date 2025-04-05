import { $, atest, parseHTML, voidThis, FPathArr } from '/modulos/funciones/utilidades.js';

export const elements = (a) => atest(a);
export const HTMLatDOM = (a) => atest(parseHTML(a));
export const HTMLatObj = parseHTML
export const voidElement = voidThis
export const HashEnabled = (() => $.HashEnabled);
export const FPathAr = FPathArr
export const classOnBody = $.classInBody

export const createUpdate = async (e, b) => {


    const createUpdateX = async (e) => {

        try {



            if ($.hash !== '' && $.path.replace('/', '') === '') {

                $.voidMain()
                $._main.appendChild(atest(await e[$.hash.replace('#', '')]))

            } else if ($.hash === "" && $.path.replace('/', '') !== '' && e[$.path.replace('/', '')] !== undefined) {

                $.voidMain()
                $._main.appendChild(atest(await e[$.path.replace('/', '')]))


            } else if ($.hash === "" && ($.path === '/' || $.path === '')) {

                $.voidMain()
                $._main.appendChild(atest(await e[$.path]))

            } else {

                $.voidMain()
                typeof e['404'] === 'function' ? await e['404']() : $._main.appendChild(atest(await e['404']))
            }
        } catch (ee) {
            console.error('Jajaja no anda che',$._referenciasInternas,ee)
            $.voidMain()
            typeof e[404] === 'function' ? await e['404']() : $._main.appendChild(atest(await e[404]))
        }
    }

    window.addEventListener('hashchange', () => createUpdateX(e));
         
    $._body.addEventListener("click", (event) => {
        const eTag = event.target.tagName
        const eHref = event.target.href

        if (eTag === 'A' ) {
            event.preventDefault()
            if( eHref !== location.href && eHref !== $.QPPath(location, true).url){
            location.hash = `${eHref.replace(location.origin, '')}`
            createUpdateX(e)
}

        }
    })
    
    if (b.header) {
        (async () => $._header.appendChild(await atest(b.header)))()
    }
    if (b.footer) {

        (async () => $._footer.appendChild(await atest(b.footer)))()
    }

    await createUpdateX(e)

}

export function deepFreeze(obj) {
    // Congelar el objeto actual
    Object.freeze(obj);

    // Recorrer las propiedades del objeto
    Object.getOwnPropertyNames(obj).forEach(function (prop) {
        // Si la propiedad es un objeto y no está congelada, lo congelamos recursivamente
        if (
            typeof obj[prop] === "object" &&
            obj[prop] !== null &&
            !Object.isFrozen(obj[prop])
        ) {
            deepFreeze(obj[prop]);
        }
    });

    return obj; // Devolver el objeto congelado
}
