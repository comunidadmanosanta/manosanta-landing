<template>
  <section class="py-10 bg-white" id="servicios">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-4">
        <h2
          class="uppercase text-4xl md:text-5xl font-bold text-black mb-4 gradient-text"
        >
          {{ $t("services.title") }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t("services.subtitle") }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
        <!-- Servicio 1 -->

        <!-- Servicio 1: Turismo de Bienestar -->
        <UIServiceCard
          :aos-delay="0"
          gradient-class="bg-gradient-to-br from-green-400 to-emerald-600"
          image-src="/images/services/bienestar.png"
          image-alt="Turismo de Bienestar"
          :tags="$t('services.wellness.tags')"
          :title="$t('services.wellness.title')"
          :description="$t('services.wellness.description')"
          :header-aos-delay="100"
          :content-aos-delay="200"
        />

        <!-- Servicio 2: Turismo en Salud -->
        <UIServiceCard
          :aos-delay="200"
          gradient-class="bg-gradient-to-br from-blue-500 to-cyan-600"
          image-src="/images/services/salud.png"
          image-alt="Turismo en Salud"
          :tags="$t('services.health.tags')"
          :title="$t('services.health.title')"
          :description="$t('services.health.description')"
          :header-aos-delay="100"
          :content-aos-delay="200"
        />

        <!-- Servicio 3: Turismo Barrial -->
        <UIServiceCard
          :aos-delay="400"
          gradient-class="bg-gradient-to-br from-orange-500 to-red-600"
          image-src="/images/services/barrial.png"
          image-alt="Turismo Barrial"
          :tags="$t('services.local.tags')"
          :title="$t('services.local.title')"
          :description="$t('services.local.description')"
          :header-aos-delay="100"
          :content-aos-delay="200"
        />
      </div>
    </div>
  </section>
</template>
