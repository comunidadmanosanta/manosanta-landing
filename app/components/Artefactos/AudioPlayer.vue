<script setup lang="ts">
import { ref, onMounted } from "vue";

const isPlaying = ref(false);
let audio: HTMLAudioElement;

onMounted(() => {
  audio = new Audio("/audio/main-001.mp3");
  audio.loop = true; // si quieres que siga sonando
  audio.volume = 0.7;
});

const togglePlay = () => {
  if (!audio) return;

  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
  } else {
    audio.play();
    isPlaying.value = true;
  }
};
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
