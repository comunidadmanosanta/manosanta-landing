import AOS from "aos";
import "aos/dist/aos.css";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      duration: 1200, // duración animación
      once: true, // animar solo una vez
      easing: "ease-in-out",
      offset: 50, // distancia antes de activar
    });
  }
});
