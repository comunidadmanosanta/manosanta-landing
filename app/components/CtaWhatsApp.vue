<script setup lang="ts">
import { onMounted, ref } from "vue";
const openedWhatsapp = ref(false);
onMounted(() => {
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) openedWhatsapp.value = true;
    else openedWhatsapp.value = false;
  });
});
</script>
<template>
  <div @click.prevent="" class="inline-block relative">
    <IconsWhatsApp />
    <Transition name="fade">
      <div
        v-if="openedWhatsapp"
        class="absolute -bottom-10 -left-11 mt-2 bg-white hover:bg-gray-200 rounded-lg shadow-lg z-10"
      >
        <a
          href="https://wa.me/573148757246"
          target="_blank"
          class="block px-4 py-2 text-gray-800"
        >
          {{ $t("contact.whatsappCTA") }}
        </a>
      </div>
    </Transition>
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
