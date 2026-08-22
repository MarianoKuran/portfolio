export default () => ({
    reviews: [],
    speed: 1,
    isPaused: false,

    init() {
        this.reviews = this.getReviews();
        this.scroll();
    },

    getReviews() {
        return [
            {id: 1, name:'Santiago González', review:'Mariano es un profesional muy capacitado y confiable. Su trabajo en el desarrollo de nuestro sistema web fue excepcional, cumpliendo con todos los plazos y superando nuestras expectativas.', rating:5},
            {id: 2, name:'Lucía Fernández', review:'Trabajar con Mariano fue una experiencia muy positiva. Su atención al detalle y su capacidad para entender nuestras necesidades nos permitió obtener un producto final de alta calidad.', rating:4},
            {id: 3, name:'Carlos Martínez', review:'Recomiendo ampliamente a Mariano. Su enfoque proactivo y su habilidad para resolver problemas hicieron que nuestro proyecto se completara sin contratiempos.', rating:5},
            {id: 4, name:'Ana López', review:'Mariano tiene un enfoque muy profesional y siempre está dispuesto a ayudar. Su trabajo ha mejorado significativamente nuestra presencia en línea.', rating:5},
            {id: 5, name:'René Gómez', review:'Mariano es un excelente profesional. Su trabajo ha sido fundamental para el éxito de nuestro proyecto.', rating:5},
            {id: 6, name:'Mario Pérez', review:'Mariano es un profesional excepcional. Su dedicación y conocimiento hicieron que nuestro proyecto fuera un éxito.', rating:5},
            {id: 1, name:'Santiago González', review:'Mariano es un profesional muy capacitado y confiable. Su trabajo en el desarrollo de nuestro sistema web fue excepcional, cumpliendo con todos los plazos y superando nuestras expectativas.', rating:5},
            {id: 2, name:'Lucía Fernández', review:'Trabajar con Mariano fue una experiencia muy positiva. Su atención al detalle y su capacidad para entender nuestras necesidades nos permitió obtener un producto final de alta calidad.', rating:4},
            {id: 3, name:'Carlos Martínez', review:'Recomiendo ampliamente a Mariano. Su enfoque proactivo y su habilidad para resolver problemas hicieron que nuestro proyecto se completara sin contratiempos.', rating:5},
            {id: 4, name:'Ana López', review:'Mariano tiene un enfoque muy profesional y siempre está dispuesto a ayudar. Su trabajo ha mejorado significativamente nuestra presencia en línea.', rating:5},
            {id: 5, name:'René Gómez', review:'Mariano es un excelente profesional. Su trabajo ha sido fundamental para el éxito de nuestro proyecto.', rating:5},
            {id: 6, name:'Mario Pérez', review:'Mariano es un profesional excepcional. Su dedicación y conocimiento hicieron que nuestro proyecto fuera un éxito.', rating:5},
        ];
    },

    scroll() {
      const slider = this.$refs.slider;

      if (!slider) return;

      // Calcular el límite máximo de scroll real del contenedor
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // Si llegó o superó el final (dejamos 1px de margen por decimales de renderizado)
      if (slider.scrollLeft >= maxScroll - 1) {
          slider.scrollLeft = 0; // Forzamos el reinicio físico al inicio
      } else {
          slider.scrollLeft += this.speed; // Avanzamos progresivamente
      }

      // Continuar el bucle de animación
      this.animationId = requestAnimationFrame(() => this.scroll());
    },
});