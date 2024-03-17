import {Swiper} from 'swiper'
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
new Swiper('.hero__slider', {
  slidesPerView: 1,
  speed: 1000,
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.hero__pagination'
  },
  autoplay: true
})



new Swiper('.lk-sites__inactive', {
  modules: [Navigation, Grid],
  spaceBetween: 40,
  grid: {
    rows: 2,
    fill: "row",
  },
  slidesPerView: 2,
  navigation : {
    prevEl: '.inactive-prev',
    nextEl: '.inactive-next',
  },
  breakpoints : {
    320 : {
      slidesPerView: 1,
    },
    769 : {
      slidesPerView: 2,
    }
  }
})
new Swiper('.lk-sites__slider', {
  modules: [Navigation, Grid],
  spaceBetween: 40,
  grid: {
    rows: 2,
    fill: "row",
  },
  slidesPerView: 2,
  navigation : {
    prevEl: '.indev-prev',
    nextEl: '.indev-next',
  },
  breakpoints : {
    320 : {
      slidesPerView: 1,
    },
    769 : {
      slidesPerView: 2,
    }
  }
})
// new Swiper('.lk-services__slider', {
//   modules: [Navigation, Grid],
//   spaceBetween: 32,
//   grid: {
//     rows: 3,
//     fill: "row",
//   },
//   slidesPerView: 3,
//   navigation : {
//     prevEl: '.services-prev',
//     nextEl: '.services-next',
//   },
//   breakpoints : {
//     320 : {
//       grid: {
//         rows: 1,
//         fill: "row",
//       },
//     },
//     768 : {
//       slidesPerView: 2,
//     },
//     1441 : {
//       slidesPerView: 3,
//       grid: {
//         rows: 3,
//         fill: "row",
//       },
//     }
//   }
// })



window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }


  resizableSwiper(
    '(min-width: 769px)',
    '.benefits__slider',
    {
      modules: [Navigation],
      slidesPerView: 'auto',
      speed: 1000,
      spaceBetween: 24,
      navigation : {
        prevEl: '.benefits__arr--prev',
        nextEl: '.benefits__arr--next'
      }
    }
  );
});
