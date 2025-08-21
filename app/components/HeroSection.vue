<template>
  <section
    :class="$attrs.class"
    class="relative min-h-[calc(100vh-74px)] flex items-center justify-center overflow-hidden"
    id="home"
  >
    <div class="absolute inset-0 hero-overlay opacity-30"></div>

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
        <div class="mb-8">
          <h1
            class="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-wider gradient-text"
            :data-text="$t('hero.subtitle')"
          >
            <span>{{ $t("hero.subtitle") }}</span>
          </h1>
        </div>
        <p
          data-aos="zoom-in"
          data-aos-delay="220"
          class="rounded-lg text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-lg lg:max-w-3xl mx-auto"
          style="
            text-shadow: rgb(0, 0, 0) 0px 0px 10px, rgb(0, 0, 0) 0px 0px 30px,
              rgb(0, 0, 0) 0px 0px 70px, rgb(0, 0, 0) 0px 0px 120px,
              rgb(0, 0, 0) 0px 0px 200px;
          "
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
