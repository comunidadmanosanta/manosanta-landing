<template>
  <section class="py-20 bg-white" id="servicios">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-black mb-4 gradient-text"
        >
          {{ $t("services.title") }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t("services.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Servicio 1 -->
        <div
          class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div
            class="h-64 bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="text-6xl text-white/90 group-hover:scale-110 transition-transform duration-300"
              >
                🌿
              </div>
            </div>
            <div class="absolute bottom-4 left-4 text-white/80 text-sm">
              Bienestar · Descanso
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-black mb-4">
              {{ $t("services.wellness.title") }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("services.wellness.description") }}
            </p>
          </div>
        </div>

        <!-- Servicio 2 -->
        <div
          class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div
            class="h-64 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="text-6xl text-white/90 group-hover:scale-110 transition-transform duration-300"
              >
                🏥
              </div>
            </div>
            <div class="absolute bottom-4 left-4 text-white/80 text-sm">
              Salud · Cuidado
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-black mb-4">
              {{ $t("services.health.title") }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("services.health.description") }}
            </p>
          </div>
        </div>

        <!-- Servicio 3 -->
        <div
          class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div
            class="h-64 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="text-6xl text-white/90 group-hover:scale-110 transition-transform duration-300"
              >
                🏘️
              </div>
            </div>
            <div class="absolute bottom-4 left-4 text-white/80 text-sm">
              Cultura · Comunidad
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-black mb-4">
              {{ $t("services.local.title") }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("services.local.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
