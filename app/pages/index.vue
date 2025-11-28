<template>
  <main
    class="flex flex-col w-full h-screen justify-center items-center gap-10 bg-cream"
  >
    <img src="/images/logo.png" alt="Manosanta Logo" class="max-h-28" />
    <div class="flex items-center gap-10">
      <a
        href="https://www.instagram.com/comunidadmanosanta/"
        target="_blank"
        class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
      >
        <IconsInstaGram />
      </a>
      <a
        href="https://wa.me/573148757246"
        target="_blank"
        class="relative w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
      >
        <CtaWhatsApp />
      </a>
      <a
        href="https://www.tiktok.com/@comunidadmanosanta"
        target="_blank"
        class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
      >
        <IconsTikTok />
      </a>
    </div>
    <p class="text-center text-gray-800 mt-5">
      {{ $t("enconstruccion") }}
    </p>
    <LangSelector />
  </main>
</template>

<script setup lang="ts"></script>
