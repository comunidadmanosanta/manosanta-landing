<script setup lang="ts">
import { onMounted, ref } from "vue";
</script>
<template>
  <div class="inline-block relative">
    <IconsWhatsApp />
    <div class="absolute -bottom-12 right-1/2 translate-x-1/2 mt-2">
      <div
        class="bg-white hover:bg-gray-200 rounded-lg shadow-lg z-10 text-xs md:text-md animate-bounce"
      >
        <div class="block px-4 py-2 text-gray-800">
          {{ $t("contact.whatsappCTA") }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
