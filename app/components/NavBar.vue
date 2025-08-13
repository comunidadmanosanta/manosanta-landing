<template>
  <nav
    id="navbar"
    class="sticky top-0 w-full bg-cream/95 backdrop-blur-md z-50 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-2xl font-bold text-black tracking-wider">
            {{ $t("brand") }}
          </NuxtLink>
          <img src="/images/logo.png" alt="Manosanta Logo" class="h-5" />
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a
            href="#servicios"
            class="text-gray-700 hover:text-brown transition-colors font-medium"
          >
            {{ $t("navbar.services") }}
          </a>
          <a
            href="#nosotros"
            class="text-gray-700 hover:text-brown transition-colors font-medium"
          >
            {{ $t("navbar.about") }}
          </a>
          <a
            href="#contacto"
            class="text-gray-700 hover:text-brown transition-colors font-medium"
          >
            {{ $t("navbar.contact") }}
          </a>

          <div class="flex items-center space-x-3">
            <a
              href="https://www.instagram.com/comunidadmanosanta/"
              target="_blank"
              class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg"
            >
              <IconsInstaGram />
            </a>
            <a
              href="https://wa.me/573148757246"
              target="_blank"
              class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg"
            >
              <IconsWhatsApp />
            </a>
            <a
              href="#"
              target="_blank"
              class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform text-lg"
            >
              <IconsFaceBook />
            </a>
          </div>

          <!-- Selector de idioma -->
          <LangSelector />
        </div>
      </div>
    </div>
  </nav>
</template>
