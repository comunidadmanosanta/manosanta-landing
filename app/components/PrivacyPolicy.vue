<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const showPolicy = ref(false);
const { t } = useI18n();

const togglePolicy = () => {
  showPolicy.value = !showPolicy.value;
};
</script>

<template>
  <div>
    <!-- Link -->
    <button
      @click="togglePolicy"
      class="text-sm underline text-blue-600 hover:text-blue-800 transition"
    >
      {{ t("privacy.openLink") }}
    </button>

    <!-- Popup Modal con Teleport -->
    <Teleport to="body">
      <div
        v-if="showPolicy"
        @click.self="togglePolicy"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white max-w-2xl w-full mx-4 p-6 rounded-2xl shadow-xl relative overflow-y-auto max-h-[90vh]"
        >
          <!-- Close Button -->
          <button
            @click="togglePolicy"
            class="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>

          <!-- Content -->
          <h2 class="text-xl font-bold mb-4 text-gray-800">
            {{ t("privacy.title") }}
          </h2>
          <p class="text-gray-600 mb-3">
            {{ t("privacy.paragraph1") }}
          </p>
          <p class="text-gray-600 mb-3">
            {{ t("privacy.paragraph2") }}
          </p>
          <p class="text-gray-600 mb-3">
            {{ t("privacy.paragraph3") }}
            <span class="font-medium">comunidadmanosanta@gmail.com</span>
          </p>
          <p class="text-gray-600">
            {{ t("privacy.paragraph4") }}
          </p>
        </div>
      </div>
    </Teleport>
  </div>
</template>
