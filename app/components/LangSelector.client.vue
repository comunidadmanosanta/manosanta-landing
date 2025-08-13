<script setup>
const { locales, setLocale, locale } = useI18n();
</script>

<template>
  <select
    :value="locale"
    @change="setLocale($event.target.value)"
    class="border rounded px-2 py-1 text-sm"
  >
    <option v-for="loc in locales" :key="loc.code" :value="loc.code">
      {{ loc.code }}
    </option>
  </select>
</template>
