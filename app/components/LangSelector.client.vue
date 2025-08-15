<script setup>
const { setLocale, locale } = useI18n();
const locale_n = ref(locale.value);

function toggleLocale() {
  locale_n.value = locale_n.value === "es" ? "en" : "es";
  setLocale(locale_n.value);
}
</script>

<template>
  <button
    @click="toggleLocale"
    class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition"
    title="Cambiar idioma"
  >
    {{ locale.toUpperCase() }}
  </button>
</template>
