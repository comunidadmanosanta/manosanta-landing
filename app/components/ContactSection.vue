<script setup lang="ts">
import PrivacyPolicy from "./PrivacyPolicy.vue";
</script>

<template>
  <section
    class="text-center py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    id="contacto"
  >
    <div
      data-aos="zoom-in"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2
        data-aos="zoom-in"
        data-aos-delay="100"
        class="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        {{ $t("contact.title") }}
      </h2>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed text-center"
      >
        {{ $t("contact.description") }}
      </p>
      <div data-aos="zoom-in" data-aos-delay="200" class="mb-12 mt-4">
        <ArtefactosNewsletter />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="250"
        class="flex flex-col lg:flex-row justify-center items-center gap-6"
      >
        <a
          href="https://wa.me/573148757246"
          target="_blank"
          class="flex items-center space-x-4 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-semibold min-w-48"
        >
          <span class="text-2xl">
            <IconsWhatsApp />
          </span>
          <span>Whatsapp</span>
        </a>

        <a
          href="https://www.instagram.com/comunidadmanosanta/"
          target="_blank"
          class="flex items-center space-x-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-semibold min-w-48"
        >
          <span class="text-2xl">
            <IconsInstaGram />
          </span>
          <span>Instagram</span>
        </a>

        <a
          href="#"
          target="_blank"
          class="flex items-center space-x-4 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-semibold min-w-48"
        >
          <span class="text-2xl">
            <IconsFaceBook />
          </span>
          <span>Facebook</span>
        </a>
        <a
          href="#"
          target="_blank"
          class="flex items-center space-x-4 bg-black hover:bg-gray-950 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-semibold min-w-48"
        >
          <span class="text-2xl">
            <IconsTikTok />
          </span>
          <span>TikTok</span>
        </a>
      </div>
      <div>
        <h3
          data-aos="zoom-in"
          data-aos-delay="300"
          class="text-gray-400 text-lg font-bold mt-8 uppercase"
        >
          {{ $t("contact.hours.title") }}
        </h3>
        <p
          data-aos="zoom-in"
          data-aos-delay="350"
          class="text-gray-400 text-md"
        >
          {{ $t("contact.hours.monday") }}
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          class="text-gray-400 text-md"
        >
          {{ $t("contact.hours.saturday") }}
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          class="text-gray-400 text-md pt-2 mt-2 border-t border-gray-700 inline-block"
        >
          <b>Email:</b>
          comunidadmanosanta@gmail.com
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          class="text-gray-400 text-md"
        >
          <b>Whatsapp:</b>
          (+57) 314 875 7246
        </p>
      </div>

      <div class="mt-16 pt-8 border-t border-gray-700">
        <p class="text-gray-400 text-md">
          {{ $t("contact.footer") }}
          <PrivacyPolicy />
        </p>
      </div>
    </div>
  </section>
</template>
