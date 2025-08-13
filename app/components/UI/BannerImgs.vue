<template>
  <div class="absolute inset-0 overflow-hidden">
    <transition-group name="fade" tag="div">
      <img
        v-for="(img, index) in [imgs[currentImage]]"
        :key="img + index"
        class="w-full h-full object-cover absolute top-0 left-0"
        :src="img"
        alt="Banner"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  imgs?: string[];
}>();

// Por defecto, un solo banner
const imgs = props.imgs ?? ["/images/banner/1.jpg"];

const currentImage = ref(0);
let intervalId: NodeJS.Timeout | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % imgs.length;
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
