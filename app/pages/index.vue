<template>
  <div>
    <NavBar />
    <ClientOnly>
      <HeroSection />
      <template #fallback>Loading...</template>
    </ClientOnly>
    <ServicesSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script setup></script>
