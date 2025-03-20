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
    
    hash.indexOf('#', 1) === -1 ? inital.hash ='' : inital.hash = hash.substring(hash.indexOf('#', 1))
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
  this._enabled = false;

  this.setData = (a, b) => {
    b = JSON.parse(JSON.stringify(b).toLocaleLowerCase())
    return Object.assign(a.dataset, b)
  }
  this.getData = (a, b) => {
    const x = b ? `[data-${a}]=${b}` : `[data-${a}]`

    return doc.querySelectorAll(x)
  }


  this.voidMain = () => {

    while (this._main.firstChild) {
      this._main.removeChild(this._main.firstChild);
    }
  }
this.classInBody=({header,main,footer})=>{
if(typeof header!=="undefined"){
  Object.assign(this._header,{className:header})
}
if(typeof main!=="undefined"){
  Object.assign(this._main,{className:main})
}
if(typeof header!=="undefined"){
  Object.assign(this._footer,{className:footer})
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
          
        })() : ''
      },
    }

  })



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

        if (item !== undefined) {
          Object.entries(item).forEach(([tagName, attributes]) => {

            const element = document.createElement(tagName);
            const x = { ...attributes }
            if (x.defineProperty) {
              Object.defineProperties(element, x.defineProperty)
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
            if (typeof x.fetchEvent === 'string') {
              const temp = x.fetchEvent
              x.fetchEvent = window[x.fetchEvent];
              delete window[temp]

            }
            if (x.fetchEvent !== undefined && typeof x.fetchEvent[1] === 'function') {
              const fetchEvent = async (url) => {
                let data = null;
                let isLoading = true;
                let error = null;

                x.fetchEvent[1]({ load: isLoading, element: element })
                try {


                  const res = await fetch(url);

                  if (!res.ok) {

                    throw new Error(`Error: ${res.status} - ${res.statusText}`);
                  }


                  data = await res.json();
                } catch (err) {

                  error = err.message;
                } finally {

                  isLoading = false;
                }


                return { data, isLoading, error };
              };
              (async () => {
                const { data, isLoading, error } = await fetchEvent(x.fetchEvent[0]);
                x.fetchEvent[1]({ data: data, load: isLoading, error: error, element: element })
              })()

            }
            if (parent) {

              return parent.appendChild(element);
            } else {

              return fargment.appendChild(element);
            }
          })
        }
      };
    });

  };
  createElementsFromConfig(a, b)

  return fargment
};


export function parseHTML(htmlString) {
  const domTree = [];
  const tagRegex = /<\/?([a-zA-Z0-9]+)([^>]*)>|([^<]+)/g;
  const stack = [];
  let match;
  while ((match = tagRegex.exec(htmlString)) !== null) {
    const [fullMatch, tagName, attributes, textContent] = match;

    if (textContent && textContent.trim()) {

      const textNode = textContent.trim();

      if (stack.length > 0) {

        stack[stack.length - 1][Object.keys(stack[stack.length - 1])].children.push(Object.keys(stack[stack.length - 1])[0] !== 'script' ? textContent : '');
      } else {
        domTree.push(textNode);
      }
    } else if (fullMatch.startsWith('</')) {

      const closedNode = stack.pop();
      if (stack.length > 0) {
        stack[stack.length - 1][Object.keys(stack[stack.length - 1])].children.push(closedNode);
      } else {
        domTree.push(closedNode);
      }
    } else if (tagName) {
      const node = {
        [tagName]: {

          ...parseAttributes(attributes),
          children: [],
        }

      };

      stack.push(node);

    }
  }
  return domTree;


  function parseAttributes(attributeString) {
    const attributes = {};
    const attrRegex = /([a-zA-Z]+)="([^"]*)"/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attributeString)) !== null) {
      attributes[attrMatch[1]] = attrMatch[2];
    }
    return attributes;
  }
}
export const voidThis = (e) => {

  while (e.firstChild) {
    e.removeChild(e.firstChild);
  }
}
export const  FPathArr=(data, key, value, newKeyValue)=> {
  for (const item of data) {
    for (const tag in item) {
      const obj = item[tag];

      // Si encontramos la combinación llave-valor, modificamos el objeto
      if (obj[key] === value) {
        Object.assign(obj, newKeyValue); // Agrega o modifica los valores especificados
        return true;
      }

      // Si hay hijos, buscamos recursivamente
      if (obj.children) {
        const found = FPathArr(obj.children, key, value, newKeyValue);
        if (found) {
          return true;
        }
      }
    }
  }

  return false;
}



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