<script setup lang="ts">
import { ref } from "vue";

const openedMenu = ref(false);
</script>
<template>
  <nav
    id="navbar"
    class="sticky top-0 w-full bg-cream/95 backdrop-blur-md z-50 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="">
          <NuxtLink
            to="#home"
            class="text-lg font-bold text-black tracking-wider flex flex-col items-center justify-center"
          >
            {{ $t("brand") }}
            <img src="/images/logo.png" alt="Manosanta Logo" class="h-6" />
          </NuxtLink>
        </div>

        <div class="flex items-center">
          <div
            :class="{
              flex: openedMenu,
              hidden: !openedMenu,
            }"
            class="md:flex absolute top-20 left-0 right-0 md:static bg-cream/95 md:bg-transparent py-10 rounded-lg md:py-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          >
            <a
              href="#servicios"
              class="text-gray-700 hover:text-brown transition-colors font-medium"
              @click="openedMenu = false"
            >
              {{ $t("navbar.services") }}
            </a>
            <a
              href="#nosotros"
              class="text-gray-700 hover:text-brown transition-colors font-medium"
              @click="openedMenu = false"
            >
              {{ $t("navbar.about") }}
            </a>
            <a
              href="#contacto"
              class="text-gray-700 hover:text-brown transition-colors font-medium"
              @click="openedMenu = false"
            >
              {{ $t("navbar.contact") }}
            </a>

            <div class="flex items-center space-x-2">
              <a
                href="https://www.instagram.com/comunidadmanosanta/"
                target="_blank"
                class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
              >
                <IconsInstaGram />
              </a>

              <a
                href="#"
                target="_blank"
                class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
              >
                <IconsFaceBook /> </a
              ><a
                href="https://wa.me/573148757246"
                target="_blank"
                class="ml-3 mr-3 lg:mr-8 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
              >
                <IconsWhatsApp />
              </a>
              <a
                href="https://www.tiktok.com/@comunidadmanosanta"
                target="_blank"
                class="ml-3 mr-3 lg:mr-8 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm"
              >
                <IconsTikTok />
              </a>
            </div>

            <LangSelector />

            <!-- Selector de idioma -->
          </div>

          <div class="md:hidden p-2 ml-4 flex items-center">
            <a
              href="#contacto"
              class="lg:mr-8 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg"
            >
              <IconsNewsLetter />
            </a>
            <a
              href="https://wa.me/573148757246"
              target="_blank"
              class="ml-3 mr-3 lg:mr-8 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg"
            >
              <IconsWhatsApp />
            </a>
            <button @click.prevent="openedMenu = !openedMenu">
              <IconsClose v-if="openedMenu" />
              <IconsMenu v-else />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
