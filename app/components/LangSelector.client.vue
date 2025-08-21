<script setup>
const { setLocale, locale } = useI18n();
const locale_n = ref(locale.value);

function toggleLocale() {
  locale_n.value = locale_n.value === "es" ? "en" : "es";
  setLocale(locale_n.value);
}
</script>

<template>
  <button
    @click="toggleLocale"
    class="flex items-center transition"
    title="Cambiar idioma"
  >
    <span v-if="locale_n === 'es'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 36 36"
      >
        <!-- Icon from Twitter Emoji by Twitter - https://creativecommons.org/licenses/by/4.0/ -->
        <path
          fill="#00247D"
          d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
        />
        <path
          fill="#CF1B2B"
          d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
        />
        <path
          fill="#EEE"
          d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
        />
        <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z" />
      </svg>
    </span>
    <span v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 36 36"
      >
        <!-- Icon from Twitter Emoji by Twitter - https://creativecommons.org/licenses/by/4.0/ -->
        <path
          fill="#C60A1D"
          d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
        />
        <path fill="#FFC400" d="M0 12h36v12H0z" />
        <path fill="#EA596E" d="M9 17v3a3 3 0 1 0 6 0v-3z" />
        <path fill="#F4A2B2" d="M12 16h3v3h-3z" />
        <path fill="#DD2E44" d="M9 16h3v3H9z" />
        <ellipse cx="12" cy="14.5" fill="#EA596E" rx="3" ry="1.5" />
        <ellipse cx="12" cy="13.75" fill="#FFAC33" rx="3" ry=".75" />
        <path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z" />
        <path
          fill="#66757F"
          d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"
        />
      </svg>
    </span>
  </button>
</template>
