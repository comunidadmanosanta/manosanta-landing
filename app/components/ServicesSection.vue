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

        <!-- Servicio 1: Turismo de Bienestar -->
        <UIServiceCard
          :aos-delay="0"
          gradient-class="bg-gradient-to-br from-green-400 to-emerald-600"
          image-src="/images/services/bienestar.jpg"
          image-alt="Turismo de Bienestar"
          tags="Bienestar · Descanso"
          :title="$t('services.wellness.title')"
          :description="$t('services.wellness.description')"
          :header-aos-delay="100"
          :content-aos-delay="200"
        />

        <!-- Servicio 2: Turismo en Salud -->
        <UIServiceCard
          :aos-delay="200"
          gradient-class="bg-gradient-to-br from-blue-500 to-cyan-600"
          image-src="/images/services/salud.jpg"
          image-alt="Turismo en Salud"
          tags="Salud · Cuidado"
          :title="$t('services.health.title')"
          :description="$t('services.health.description')"
          :header-aos-delay="100"
          :content-aos-delay="200"
        />

        <!-- Servicio 3: Turismo Barrial -->
        <UIServiceCard
          :aos-delay="400"
          gradient-class="bg-gradient-to-br from-orange-500 to-red-600"
          image-src="/images/services/barrial.jpg"
          image-alt="Turismo Barrial"
          tags="Cultura · Comunidad"
          :title="$t('services.local.title')"
          :description="$t('services.local.description')"
          :header-aos-delay="100"
          :content-aos-delay="200"
        />
      </div>
    </div>
  </section>
</template>
