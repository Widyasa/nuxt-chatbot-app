// https://nuxt.com/docs/api/configuration/nuxt-config
import {definePreset} from "@primeuix/styled";
import Aura from '@primevue/themes/aura';
const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{noir.50}',
      100: '{noir.100}',
      200: '{noir.200}',
      300: '{noir.300}',
      400: '{noir.400}',
      500: '{noir.500}',
      600: '{noir.600}',
      700: '{noir.700}',
      800: '{noir.800}',
      900: '{noir.900}',
      950: '{noir.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{noir.700}',
          inverseColor: '#ffffff',
          hoverColor: '{noir.700}',
          activeColor: '{noir.700}'
        },
        highlight: {
          background: '{noir.700}',
          focusBackground: '{noir.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{noir.50}',
          inverseColor: '{noir.700}',
          hoverColor: '{noir.100}',
          activeColor: '{noir.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  publicRuntimeConfig: {
    public: {
      MODEL:process.env.MODEL_NAME,
      DB:process.env.DATABASE_URL
    }
  },
  mdc: {
    highlight: {
      theme: 'dracula',
      // langs: ['ts'],
      wrapperStyle: true
    },
  },
  app: {
    head: {
      title: "Widyasa Chatbot",
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/github-markdown.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/mdc',
    '@prisma/nuxt'
  ],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Noir,
        options: {
          prefix: 'p',
          darkMode:true,
          // darkModeSelector: '.p-dark',
          cssLayer: false
        }
      }
    }
  },
})
