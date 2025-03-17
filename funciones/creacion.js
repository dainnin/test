


import { $, atest } from '/modulos/funciones/utilidades.js';


export const elements=(a)=>atest(a); 


export const HashEnabled = (() => $.HashEnabled);

const hPart = () => [$.hash === '' ? $.path.replace("/", "") : $.hash.replace("#", ""), `${$.hash}_${$.search["pages"]}`.replace("#", "")]
const create =  (Ebody) => atest( Ebody[hPart()[0]][hPart()[1]])
export const createUpdate =async (e, b) => {


    const createUpdateX =async (e) => {
        try {



            if ($.hash !== '' && $.path.replace('/', '') === '') {
                
                $.voidMain()
                $._main.appendChild(atest(await e[$.hash.replace('#', '')]))

            } else if ($.hash === "" && $.path.replace('/', '') !== '') {
               
                $.voidMain()
                $._main.appendChild(atest(await e[$.path.replace('/', '')]))


            } else if ($.hash === "" && $.path === '') {
               
                $.voidMain()
                $._main.appendChild(atest(await e[$.path]))

            } else {
                
                $.voidMain()
                typeof e['404'] === 'function' ? await e['404']() : $._main.appendChild(atest(await e[404]))
            }
        } catch (ee) {
            console.error('Jajaja no anda che')
            $.voidMain()
            typeof e[404] === 'function' ? await e['404']() : $._main.appendChild(atest(await e[404]))
        };
    }
    
    window.addEventListener('hashchange', () => createUpdateX(e));
    $._header.addEventListener("click", async (event) => {

        const originURL = location.origin
        const eventHash = event.target.hash

        const targetN = event.target.tagName
        try {

            if (event.target && targetN === ('A')) {
                event.preventDefault()



                if ('#' + $.hash !== eventHash ?
                    location.hash = eventHash : false && e[hPart()[0]] !== undefined) {
                    $.voidMain()

                    $._main.appendChild(await create(e))
                } else if ($.hash === "" && $.path === '') {
                    $.voidMain()
                    typeof e['index'] === 'function' ?await e['index']() : $._main.appendChild(await atest(e['index']))
                }

            }

        } catch {
            typeof e['404'] === 'function' ? await e['404']() : $._main.appendChild(await atest(e['404']))
        }
    }
    )
    $._main.addEventListener("click",async (event) => {

        const eventHash = event.target.hash
        const targetN = event.target.tagName

        try {

            if (event.target && targetN === ('A') && $.hash !== "") {
                event.preventDefault()

                if (location.hash !== eventHash ?
                    location.hash = eventHash : false && e[hPart()[0]] !== undefined) {

                    $.voidMain()

                    $._main.appendChild(await create(e))
                } else if (location.hash === "") {
                    $.voidMain()
                    typeof e['index'] === 'function' ?await e['index']() : $._main.appendChild(await atest(e['index']))
                }

            }
        } catch {
            typeof e['404'] === 'function' ?await e['404']() : $._main.appendChild(await atest(e['404']))
        }

    }
    )
    if (b.header) {
        (async ()=>$._header.appendChild(await atest(b.header)))()
    }
    if (b.footer) {
        (async()=> $._footer.appendChild(await atest(b.footer)))()
    }

     await createUpdateX(e)

}





/* X(Ebody, rutas,true); */




