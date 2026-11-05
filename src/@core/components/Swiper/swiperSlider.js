import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export function initSwiper() {
  const selector = ".swiper";
  const swiper = document.querySelector(selector);

  if (swiper) {
    // Evitar inicializar múltiples veces
    if (swiper.getAttribute("data-initialized") === "true") {
      return;
    }

    swiper.setAttribute("data-initialized", "true");
    const optionsJson = swiper.getAttribute('data-options') || '{}';
    let customOptions = {};

    try {
      customOptions = swiper.getAttribute('data-options') ? JSON.parse(optionsJson) : {};
    } catch (e) {
      console.warn('Invalid JSON in data-options:', e);
    }

    const nextEl = swiper.querySelector('.swiper-button-next');
    const prevEl = swiper.querySelector('.swiper-button-prev');
    const paginationEl = swiper.querySelector('.swiper-pagination');

    new Swiper(swiper, {
      ...customOptions,
      modules: [Navigation, Pagination, Autoplay, EffectFade],
    });
  }
}

// Ejecutar cuando el DOM esté listo y también en cada navegación de página
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwiper);
  } else {
    initSwiper();
  }
  
  // Re-inicializar en cada navegación de Astro ClientRouter
  document.addEventListener('astro:page-load', () => {
    // Limpiar marcadores de inicialización previos
    document.querySelectorAll('.swiper').forEach(swiper => {
      swiper.removeAttribute('data-initialized');
    });
    initSwiper();
  });
}
