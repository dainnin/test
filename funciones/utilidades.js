

export const BuscData = (estructura, prop, val) => {
  if (Array.isArray(estructura)) {
    for (const item of estructura) {
      const result = BuscData(item, prop, val);
      if (result) return result;
    }
  } else if (typeof estructura === 'object') {
    if (estructura[prop] === val) {
      return estructura;
    }
    for (const key in estructura) {
      if (estructura.hasOwnProperty(key)) {
        const result = BuscData(estructura[key], prop, val);
        if (result) return result;
      }
    }
  }
  return null;
};
const QPPath = (req, enabled = false) => {
  const inital = { search: {}, path: '', hash: '' }
  if (req === undefined) {
    return ''
  }
  const { pathname, hash, href, origin } = req
  const texto = pathname;
  const caracter = '/';
  let posiciones = [];
  let indice = texto.indexOf(caracter);

  while (indice !== -1) {
    posiciones = (indice);
    indice = texto.indexOf(caracter, indice + 1);
  }



  if (req !== undefined) {



    if (href.includes('?') !== -1) {

      for (const a of href.substring(href.indexOf('?')).replace('?', '').split("&")) {

        const [k, v] = a.split("=")
        if (v) {
          Object.assign(inital['search'], { [k]: v })
        }
      }
    }
  }
  if (enabled) {

    hash.indexOf('#', 1) === -1 ? '' : inital.hash = hash.substring(hash.indexOf('#', 1))
    Object.assign(inital, {
      path: hash.indexOf('#', 1) === -1 ? hash.replace('#', '') : hash.substring(1, hash.indexOf('#', 1) - 1)
    })

  } else {
    Object.assign(inital, {
      path: pathname.length - 1 === posiciones ? (hash === '' ? pathname.substring(0, posiciones) :
        '/' + hash.substring(0, hash.indexOf('?')))
        : pathname
    })
  }
  inital.path.indexOf('?') === -1 ? '' : inital.path = inital.path.substring(0, inital.path.indexOf('?'))
  Object.assign(inital, { url: origin + inital.path, href: href, /* hash: hash.substring(0, hash.indexOf('?')) */ })


  return inital
}

export function $$() {
  const docBody = document.body;
  const doc = document;
  const docChild = docBody.children;
  this._body = docBody;
  this._doc = doc;
  this._main = docBody.children._main;
  this._header = docChild._header;
  this._footer = docChild._footer;
  this._topIndex = docChild._topIndex ? docChild._topIndex : {};
  this._panel = docChild._panel;
  this._enabled = false;
  //funciones
  this.setData = (a, b) => {
    b = JSON.parse(JSON.stringify(b).toLocaleLowerCase())
    return Object.assign(a.dataset, b)
  }
  this.getData = (a, b) => {
    const x = b ? `[data-${a}]=${b}` : `[data-${a}]`

    return doc.querySelectorAll(x)
  }


  this.crearTag = (tag, position = "lastChild") => {


    const x = doc.createElement("_")
    x.innerHTML = tag
    const fargment = doc.createDocumentFragment()
    Object.values(x.children).forEach(t => fargment.appendChild(t))
    if (position !== "lastChild") {
      position = this._main.children[position]
    } else {
      position = this._main[position]
    }
    return this._main.insertBefore(fargment, position)
  }
  this.voidMain = () => {

    while (this._main.firstChild) {
      this._main.removeChild(this._main.firstChild);
    }
  }
  Object.defineProperties(this, {
    'hash': {
      get: () => QPPath(location, this.enabled).hash,

    },
    'search': {
      get: () => QPPath(location, this._enabled).search,

    },
    'hash': {
      get: () => QPPath(location, this._enabled).hash,

    },
    'path': {
      get: () => QPPath(location, this._enabled).path,

    },
    'QPPath': {
      get: () => QPPath,

    },
    'HashEnabled': {
      get: () => {
        const { hash, pathname } = location;
        this._enabled ? this._enabled = false : this._enabled = true
        hash === '' ? (() => {
          location.hash += '#/';
          pathname === '/' ? '' : location.pathname += '/'
        })() : ''
      },
    }

  })

  //Estilos

  /* Object.assign(this._header, {
    className: `
        headerP
        `

  }) */
  Object.assign(this._main, {
    crearTag: this.crearTag,
    name: "_main",
    style: `
        display: block;
        `})

  Object.assign(this._topIndex, {
    className: "inicio",
    style: `
                position:fixed;
                color:red;
                bottom:50px;
                right:25px;
            `})

  /* Object.assign(this._footer, {

    style: `
            color:red;
        `}) */

}
export const $ = new $$()
const maped = (config) => {

  try {
    Object.entries(config)
  }
  catch {

  }
  return Object.entries(config).map(([x, c]) => {

    const b = { ...c }

    typeof b !== null ? delete b.children : ""
    const props = b

    const children = c !== null ? c.children : c.children = []
    const EspecialAttr = [
      "innerText", "textContent"
    ]
    EspecialAttr.find(a => {
      if (props.hasOwnProperty(a)) {
        if (Array.isArray(children)) {
          children.unshift(props[a])
          delete props[a]
        }

      }
    })
    if (x !== "#text") {
      return { type: x, props: props, children: children }
    }


  }).at()

}

export const parseHTML = (strings) => {
  strings = strings.replace("\n", "{'\n'}")
  const regex = /<(\w+)([^>]*?)>(.*?)<\/\1>/gis;

  const matchToArray = (a) => Array.from(a.matchAll(regex));

  const deconst = (maped, contain = {}) => {

    matchToArray(maped).forEach((a) => {
      let [innerOuter, tag, attr, innerCont] = a;

      const props = {};
      tag === "text" ? tag = "#text" : ""
      const patron = /(\w+)=(".*?")/gis;
      let coincidencia;
      while ((coincidencia = patron.exec(attr)) !== null) {

        const ky = coincidencia[1] !== "class" ? coincidencia[1] : "className"

        props[ky] = coincidencia[2].substring(1, coincidencia[2].length - 1);
      }

      const tagE = {

        ...props,
        children: []
      };


      if (matchToArray(innerCont).length > 0) {

        deconst(innerCont, tagE.children);

      } else {
        if (!tag === "img") {

          tagE.children.push(innerCont ? innerCont : "");
        } else {
          delete tagE.children
        }
      }

      tag === "#text" ? contain.push(innerCont) : contain.push({ [tag]: tagE })

    });

  };

  const elements = [];
  deconst(strings, elements);
  return elements;
}
export const atest = (a, b = null) => {


  if (!window) {
    const remap = Object.entries(a).map(([x, c]) => {

      const b = { ...c }
      delete b.children
      const props = b
      const children = c.children
      return { type: x, props: props, children: children }

    }
    )

    const cElement = (config) => {


      const eTag = {
        "Link": Link,
        "Imagen": Imagen,
        "Head": Head,
        "Script": Script,
        "NextScript": NextScript,
      }
      let remap

      const maper = (rmap) => rmap.children.map(child =>
        typeof child === 'string' ? child === null ? "" : child : cElement(child))
      const Especials = () => {
        //Especials tag
        return React.createElement(eTag[remap.type],
          remap.props, ...(remap.children && remap.children.at() ? maper(remap) : []))
      }
      remap = maped(config)
      if (!Array.isArray(config) && remap) {


        if (eTag[remap.type]) {

          return Especials()
        }

        return React.createElement(
          remap.type,
          remap.props,
          ...(remap.children && remap.children.at() ? maper(remap) : [])
        );
      } else {

        const t = config.map((a, i) => {

          remap = maped(a)
          if (eTag[remap.type]) {
            return Especials()
          }

          return React.createElement(
            remap.type,
            remap.props,
            ...(remap.children ? maper(remap) : [])
          )

        }
        )
        return React.createElement("div", null, t)
      }



    }
  }


  const fargment = $._doc.createDocumentFragment()
  const createElementsFromConfig = (config, parent = null) => {

    Array.isArray(config) ? config : config = [config]
    config.forEach(item => {


      if (typeof item === "string") {

        const element = document.createTextNode(item)

        if (parent) {

          return parent.appendChild(element);
        }
      } else {
        Object.entries(item).forEach(([tagName, attributes]) => {

          const element = document.createElement(tagName);
          const x = { ...attributes }
          if(x.defineProperty){
            Object.defineProperties(element,x.defineProperty)
          }
          Object.assign(element, [x].filter(a => {
            delete a.children;
            return a.dataset ? "" : a
          })[0]
          );

          Object.assign(element.dataset, x.dataset)

          if (attributes.children) {

            createElementsFromConfig(attributes.children, element);

          }
          if(x.fetchEvent!==undefined && typeof x.fetchEvent[1]==='function'){
            const fetchEvent =async(url)=> {
                let data = null;
                let isLoading = true;
                let error = null;
              
          x.fetchEvent[1]({load:isLoading,element:element})
                try {
                               
                  // Realizar la solicitud (fetch)
                  const res = await fetch(url);
              
                  if (!res.ok) {
                    // Manejo del error si la respuesta no es exitosa
                    throw new Error(`Error: ${res.status} - ${res.statusText}`);
                  }
              
                  // Procesar los datos obtenidos
                  data = await res.json();
                } catch (err) {
                  // Capturar errores de red o en el procesamiento de datos
                  error = err.message;
                } finally {
                  
                  // Cambiar el estado de carga a completado
                  isLoading = false;
                }
              
                // Retornar los datos, el estado de carga y cualquier error
                return { data, isLoading, error };
              };
              (async()=>{
                const { data, isLoading, error } = await fetchEvent(x.fetchEvent[0]);
                x.fetchEvent[1]({data:data,load:isLoading,error:error,element:element })
              })()
          
          }
          if (parent) {
            // console.log("parent")
            return parent.appendChild(element);
          } else {
            // console.log("fragment")
            return fargment.appendChild(element);
          }
        })
      };
    });

  };
  createElementsFromConfig(a, b)

  return fargment
};

export const fetchGen = async (url) => {
  var x = {}
  const req = async () => {
    try {
      const data = await fetch(url);

      if (!data.ok) return '<h1 textContent="error"></h1>'
      const res = await data.text();
      x = res
      return eval(`(${res})`);
    } catch (e) {
      console.log(e)
      return '<h1 textContent="error"></h1>'
    }

  }

  await req().then(z => Object.assign(x, z))


  return x

}
