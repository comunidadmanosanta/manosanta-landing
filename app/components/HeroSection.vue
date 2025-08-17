<template>
  <section
    class="relative min-h-[calc(100vh-74px)] flex items-center justify-center overflow-hidden"
  >
    <div class="absolute inset-0 hero-overlay opacity-30"></div>

    <UIBannerImgs
      :imgs="[
        '/images/banner/2.jpg',
        '/images/banner/3.jpg',
        '/images/banner/4.jpg',
      ]"
    />
    <div
      data-aos="zoom-in"
      class="relative z-10 text-center mx-auto px-4 floating bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg"
    >
      <div class="mb-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          class="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-4 tracking-wider gradient-text"
        >
          {{ $t("hero.title") }}
        </h1>
        <div
          class="flex items-center justify-center mb-4 space-x-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img src="/images/logo.png" alt="Manosanta Logo" class="h-16" />
        </div>
        <p
          data-aos="zoom-in"
          data-aos-delay="150"
          class="text-2xl md:text-3xl text-gray-600 font-light tracking-wide"
        >
          {{ $t("hero.subtitle") }}
        </p>
      </div>
      <p
        data-aos="zoom-in"
        data-aos-delay="220"
        class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto"
      >
        {{ $t("hero.description") }}
      </p>
      <a
        data-aos="zoom-in"
        data-aos-delay="300"
        href="#contacto"
        class="inline-block bg-brown hover:bg-brown-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      >
        {{ $t("hero.cta") }}
      </a>
    </div>
  </section>
</template>
