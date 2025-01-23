import axios from "axios";


export default axios.create({

  //URL de strapi, conexão com strapi usando Axios
  baseURL: "http://localhost:1337",

  headers: {

    "Content-type": "application/json",

  },

});

