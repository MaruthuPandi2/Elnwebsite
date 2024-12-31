// src/types/owl-carousel.d.ts

import * as $ from 'jquery';

declare module 'jquery' {
  interface JQuery<TElement = HTMLElement> {
    owlCarousel(options?: any): this;
  }
}
