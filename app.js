import { data } from "./data.js";

const { createApp } = Vue;
createApp({
  data() {
    return {
      title: "Tabla dinamica usando v-for",
      show: false,
      log: true,
      mensaje: "Hola soy un arbol",
      mostrarMensaje: true,
// Estoas tres que sigen se ocupan en la tarea:
      info: [],
      par: "par",
      odd: "odd",
      cssPropiedades: {
        "bg-warning-test": false,
        "text-secondary-test": true
      },
      warning: "bg-warning-test ",
      amarillo: "texto-amarillo",
      textoChico:"text-secondaty-test",
      classShow: false,
      blanco: 'white',
      bgcol: "light-green",
    };
  },
  created() {
    this.getElements();
  },
  methods: {
    showHide() {
      this.mostrarMensaje
        ? (this.mostrarMensaje = false)
        : (this.mostrarMensaje = true);
    },
    getElements() {
      this.info = data;
    },
  },
  computed:{
    elementosCss(){
      return{
        'color': this.blanco,
        'background-color': this.bgcol
      }
    }
  },
}).mount("#app");
