import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export function initSwiper() {

  const selector = ".swiper";
  const swiper = document.querySelector(selector);

  if (swiper) {
    // TODO: Initialize swiper here
    console.log('Swiper initialized');

    swiper.setAttribute("data-initialized", "true")
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

// Ejecutar cuando el DOM esté listo
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initSwiper);
}
