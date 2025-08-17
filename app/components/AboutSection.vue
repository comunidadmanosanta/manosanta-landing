<template>
  <section
    class="py-20 bg-gradient-to-br from-cream via-cream-dark to-cream"
    id="nosotros"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-aos="zoom-in" data-aos-delay="100" class="order-2 lg:order-1">
          <h2
            class="text-4xl md:text-5xl font-bold text-black mb-6 gradient-text"
          >
            {{ $t("about.title") }}
          </h2>
          <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              {{ $t("about.p1") }}
            </p>
            <p>
              {{ $t("about.p2") }}
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" class="order-1 lg:order-2">
          <div
            class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-brown"
          >
            <blockquote
              class="text-2xl md:text-3xl text-gray-800 italic leading-relaxed mb-6"
            >
              "{{ $t("about.quote") }}"
            </blockquote>
            <cite class="text-brown font-semibold text-xl not-italic">{{
              $t("about.author")
            }}</cite>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
