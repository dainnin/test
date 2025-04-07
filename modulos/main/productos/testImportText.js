const neoFetch = {
  text: (...a) => {
    let text
    fetch(a)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se encontró el archivo');
        }
        return response.text();
      })
      .then(data => {


        text = data;


      }
      )

      .catch((error) => {
        console.error(error);
      });

    return text

  },


}
const neoFetch = {
  text: async (...a) => {
    let text
    try {
      const response = await fetch(...a);
      if (!response.ok) {
        throw new Error('No se encontró el archivo');
        
      }
      const data = await response.text();
      text= data;
      return text
    } catch (error) {
      console.error(error);
      return JSON.stringify({ error: error.message });
    }
  },
};