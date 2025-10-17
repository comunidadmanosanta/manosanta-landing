<template>
  <section
    :class="$attrs.class"
    class="relative min-h-[calc(100vh-74px)] flex items-center justify-center overflow-hidden"
    id="home"
  >
    <UIBannerImgs
      :imgs="[
        '/images/banner/1.jpg',
        '/images/banner/2.jpg',
        '/images/banner/3.jpg',
        '/images/banner/4.jpg',
      ]"
    />
    <div data-aos="zoom-in" class="relative z-10 text-center mx-auto px-4">
      <div class="floating">
        <div class="mb-2">
          <h1
            class="uppercase text-3xl md:text-4xl lg:text-6xl font-bold mb-2 tracking-wider gradient-text"
            :data-text="$t('hero.subtitle')"
          >
            {{ $t("hero.subtitle") }}
          </h1>
        </div>
        <p
          data-aos="zoom-in"
          data-aos-delay="220"
          class="rounded-lg text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed max-w-lg lg:max-w-3xl mx-auto"
        >
          {{ $t("hero.description") }}
        </p>
        <a
          data-aos="zoom-in"
          data-aos-delay="300"
          href="#servicios"
          class="inline-flex flex-col bg-brown bg-opacity-80 items-center opacity-70 text-white p-5 py-2 rounded-full text-xl font-semibold shadow-xl"
        >
          <span>{{ $t("hero.cta") }}</span>
          <IconsArrowBottom class="text-sm" />
        </a>
      </div>
    </div>
  </section>
</template>
