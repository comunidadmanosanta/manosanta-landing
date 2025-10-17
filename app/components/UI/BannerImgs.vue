<template>
  <div class="absolute inset-0 overflow-hidden opacity-50">
    <transition-group name="fade" tag="div">
      <img
        v-for="(img, index) in [safeImgs[currentImage]]"
        :key="img + index"
        class="w-full h-full object-cover absolute top-0 left-0"
        :src="img"
        alt="Banner"
        @error="handleImageError(index)"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps<{
  imgs?: string[];
  fallback?: string; // Imagen por defecto
}>();

// Fallback por defecto
const fallbackImage = props.fallback ?? "/images/banner/fallback.jpg";

// Estado seguro de imágenes (para hacer fallback cuando una falle)
const safeImgs = ref<string[]>(props.imgs ?? ["/images/banner/1.jpg"]);

const currentImage = ref(0);
let intervalId: NodeJS.Timeout | null = null;

// Precargar imágenes para evitar parpadeos
function preloadImage(url: string) {
  const img = new Image();
  img.src = url;
}

// Si alguna imagen falla, poner fallback
function handleImageError(index: number) {
  safeImgs.value[index] = fallbackImage;
}

onMounted(() => {
  // Precargar todas menos la actual
  safeImgs.value.forEach((img, i) => {
    if (i !== currentImage.value) preloadImage(img);
  });

  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % safeImgs.value.length;
    // Precargar la siguiente
    const nextIndex = (currentImage.value + 1) % safeImgs.value.length;
    preloadImage(safeImgs.value[nextIndex]);
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 8s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
