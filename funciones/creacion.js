import { $, atest } from 'https://dainnin.github.io/test/funciones/utilidades.js';

export const HashEnabled = (() => $.HashEnabled);

const hPart = () => [$.hash === '' ? $.path.replace("/", "") : $.hash.replace("#", ""), `${$.hash}_${$.search["pages"]}`.replace("#", "")]
const create = (Ebody) => atest(Ebody[hPart()[0]][hPart()[1]])
export const createUpdate = (e, b) => {

    const createUpdateX = (e) => {
        try {

            if ($.hash !== '' && $.path.replace('/', '') === '') {
                console.log(2, $.hash,)
                $.voidMain()
                $._main.appendChild(atest(e[$.hash.replace('#', '')]))

            } else if ($.hash === "" && $.path.replace('/', '') !== '') {
                console.log(3, $.path.replace('/', ''), e)
                $.voidMain()
                $._main.appendChild(atest(e[$.path.replace('/', '')]))

            } else if ($.hash === "" && $.path === '') {
                console.log(4)
                $.voidMain()
                $._main.appendChild(atest(e[$.path]))

            } else {
                console.log(9)
                $.voidMain()
                typeof e['404'] === 'function' ? e['404']() : $._main.appendChild(atest(e[404]))
            }
        } catch (ee) {
            console.error('Jajaja no anda che')
            $.voidMain()
            typeof e[404] === 'function' ? e['404']() : $._main.appendChild(atest(e[404]))
        };
    }
    console.log(e)
    window.addEventListener('hashchange', () => createUpdateX(e));
    $._header.addEventListener("click", (event) => {

        const originURL = location.origin
        const eventHash = event.target.hash

        const targetN = event.target.tagName
        try {

            if (event.target && targetN === ('A')) {
                event.preventDefault()

                if ('#' + $.hash !== eventHash ?
                    location.hash = eventHash : false && e[hPart()[0]] !== undefined) {
                    $.voidMain()

                    $._main.appendChild(create(e))
                } else if ($.hash === "" && $.path === '') {
                    $.voidMain()
                    typeof e['index'] === 'function' ? e['index']() : $._main.appendChild(atest(e['index']))
                }

            }

        } catch {
            typeof e['404'] === 'function' ? e['404']() : $._main.appendChild(atest(e['404']))
        }
    }
    )
    $._main.addEventListener("click", (event) => {

        const eventHash = event.target.hash
        const targetN = event.target.tagName

        try {

            if (event.target && targetN === ('A') && $.hash !== "") {
                event.preventDefault()

                if (location.hash !== eventHash ?
                    location.hash = eventHash : false && e[hPart()[0]] !== undefined) {

                    $.voidMain()

                    $._main.appendChild(create(e))
                } else if (location.hash === "") {
                    $.voidMain()
                    typeof e['index'] === 'function' ? e['index']() : $._main.appendChild(atest(e['index']))
                }

            }
        } catch {
            typeof e['404'] === 'function' ? e['404']() : $._main.appendChild(atest(e['404']))
        }

    }
    )
    if (b.header) {
        $._header.appendChild(atest(b.header))
    }
    if (b.footer) {
        $._footer.appendChild(atest(b.footer))
    }

    createUpdateX(e)

}
