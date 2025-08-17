<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const firstName = ref("");
const lastName = ref("");
const birthday = ref(""); // formato MM/DD
const phone = ref("");
const status = ref("");
const loading = ref(false);

async function subscribe() {
  try {
    loading.value = true;
    status.value = "";

    const res = await $fetch("/api/subscribe", {
      method: "POST",
      body: {
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        birthday: birthday.value,
        phone: phone.value,
      },
    });

    status.value = "✅ ¡Suscripción exitosa!";
    email.value = "";
    firstName.value = "";
    lastName.value = "";
    birthday.value = "";
    phone.value = "";
  } catch (err: any) {
    status.value = `❌ ${err.statusMessage || "Error al suscribirse"}`;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="w-full max-w-3xl mx-auto bg-white/10 p-4 rounded-lg shadow-lg">
    <p class="text-gray-400 text-xs mb-2">
      {{ $t("contact.newsletter.title") }}
    </p>
    <form
      @submit.prevent="subscribe"
      class="flex flex-col md:flex-row md:flex-wrap gap-3"
    >
      <input
        type="text"
        v-model="firstName"
        :placeholder="$t('contact.newsletter.firstName')"
        class="flex-1 min-w-[150px] p-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        v-model="lastName"
        :placeholder="$t('contact.newsletter.lastName')"
        class="flex-1 min-w-[150px] p-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="email"
        v-model="email"
        :placeholder="$t('contact.newsletter.email')"
        required
        class="flex-1 min-w-[200px] p-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        v-model="phone"
        :placeholder="$t('contact.newsletter.phone')"
        class="flex-1 min-w-[150px] p-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        v-model="birthday"
        :placeholder="$t('contact.newsletter.birthday')"
        class="flex-1 min-w-[150px] p-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        :disabled="loading"
        class="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? "Enviando..." : "Suscribirme" }}
      </button>

      <p v-if="status" class="w-full text-center mt-2 text-sm text-white">
        {{ status }}
      </p>
    </form>
  </div>
</template>
