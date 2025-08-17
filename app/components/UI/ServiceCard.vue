<template>
  <div
    data-aos="flip-right"
    :data-aos-delay="aosDelay"
    class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
  >
    <!-- Header con imagen y gradiente -->
    <div
      :data-aos="headerAos"
      :data-aos-delay="headerAosDelay"
      class="h-64 relative overflow-hidden"
      :class="gradientClass"
    >
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Slot para contenido personalizado del header -->
      <div class="absolute inset-0 flex items-center justify-center">
        <slot name="header">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg"
          />
        </slot>
      </div>

      <!-- Tags/categorías -->
      <div class="absolute bottom-4 left-4 text-white/80 text-sm">
        <slot name="tags">
          {{ tags }}
        </slot>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="p-8" :data-aos="contentAos" :data-aos-delay="contentAosDelay">
      <!-- Slot para título personalizable -->
      <h3 class="text-2xl font-bold text-black mb-4">
        <slot name="title">
          {{ title }}
        </slot>
      </h3>

      <!-- Slot para descripción personalizable -->
      <div class="text-gray-600 leading-relaxed">
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <!-- Slot adicional para contenido extra -->
      <slot name="extra-content"></slot>
    </div>

    <!-- Slot para footer si se necesita -->
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
// Props del componente
const props = defineProps({
  // Datos de la imagen
  imageSrc: {
    type: String,
    default: "",
  },
  imageAlt: {
    type: String,
    default: "",
  },

  // Contenido textual
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  tags: {
    type: String,
    default: "",
  },

  // Configuración de gradiente
  gradientClass: {
    type: String,
    default: "bg-gradient-to-br from-green-400 to-emerald-600",
  },

  // Configuración de AOS
  aosDelay: {
    type: [String, Number],
    default: 0,
  },

  // AOS específicos para secciones
  headerAos: {
    type: String,
    default: "fade-in",
  },
  headerAosDelay: {
    type: [String, Number],
    default: 100,
  },
  contentAos: {
    type: String,
    default: "fade-in",
  },
  contentAosDelay: {
    type: [String, Number],
    default: 200,
  },
});
</script>
