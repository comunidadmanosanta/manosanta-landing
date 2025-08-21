<template>
  <div>
    <NavBar />
    <ClientOnly>
      <template #fallback>
        <div class="w-full h-screen">
          <div
            class="flex items-center justify-center h-full bg-cream/95 text-brown"
          >
            <IconsLoading class="text-4xl animate-spin" />
          </div>
        </div>
      </template>
      <HeroSection />

      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <ArtefactosAudioPlayer />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>
