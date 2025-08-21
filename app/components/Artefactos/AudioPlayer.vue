<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isPlaying = ref(false);
let audio: HTMLAudioElement;
let fadeInterval: number | null = null;
const defaultVolume = 0.7; // volumen normal

const clearFade = () => {
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }
};

const fadeVolume = (target: number, step: number, callback?: () => void) => {
  clearFade();
  fadeInterval = window.setInterval(() => {
    if (!audio) return;
    if (
      (step < 0 && audio.volume <= target) ||
      (step > 0 && audio.volume >= target)
    ) {
      audio.volume = target;
      clearFade();
      if (callback) callback();
    } else {
      audio.volume = Math.min(Math.max(audio.volume + step, 0), 1);
    }
  }, 100); // cada 100ms suaviza el cambio
};

const togglePlay = () => {
  if (!audio) return;

  if (isPlaying.value) {
    fadeVolume(0, -0.1, () => {
      audio.pause();
      isPlaying.value = false;
      audio.volume = defaultVolume; // reset por si vuelve
    });
  } else {
    audio.volume = 0; // arranca suave
    audio.play();
    isPlaying.value = true;
    fadeVolume(defaultVolume, 0.1);
  }
};

// Manejo de visibilidad
const handleVisibilityChange = () => {
  if (!audio || !isPlaying.value) return;

  if (document.hidden) {
    fadeVolume(0, -0.1, () => audio.pause());
  } else {
    audio.play();
    audio.volume = 0;
    fadeVolume(defaultVolume, 0.1);
  }
};

onMounted(() => {
  audio = new Audio("/audio/main-001.mp3");
  audio.loop = true;
  audio.volume = defaultVolume;

  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  if (audio) {
    audio.pause();
    audio = null;
  }
  clearFade();
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <div
    class="fixed bottom-6 right-6 z-50 opacity-75 hover:opacity-100 transition-opacity"
  >
    <button
      @click="togglePlay"
      class="px-4 py-2 w-14 h-14 rounded-full shadow-lg text-white font-bold transition duration-300 ease-in-out"
      :class="
        isPlaying
          ? 'bg-gray-500 hover:bg-gray-600'
          : 'bg-gray-500 hover:bg-gray-600'
      "
    >
      <IconsAudioActive v-if="isPlaying" size="24" />
      <IconsAudioInActive v-else size="24" />
    </button>
  </div>
</template>
